import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { DataTable } from "./";

const mockClient = {
  models: {
    Todo: {
      list: jest.fn().mockResolvedValue({ data: [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
      ]}),
      observeQuery: jest.fn().mockReturnValue({
        subscribe: jest.fn().mockReturnValue({
          unsubscribe: jest.fn(),
        }),
      }),
    },
  },
};

const mockColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
];

describe("DataTable", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the table with data", async () => {
    render(<DataTable model="Todo" columns={mockColumns} client={mockClient} />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    });
  });

  it("opens create modal when create button is clicked", async () => {
    render(<DataTable model="Todo" columns={mockColumns} client={mockClient} />);

    await waitFor(() => {
      fireEvent.click(screen.getByTestId("create-record-button"));
      expect(screen.getByTestId("dynamic-form")).toBeInTheDocument();
    });
  });

  it("opens edit modal when edit button is clicked", async () => {
    render(<DataTable model="Todo" columns={mockColumns} client={mockClient} />);

    await waitFor(() => {
      fireEvent.click(screen.getAllByText("Edit")[0]);
      expect(screen.getByText("Edit Record")).toBeInTheDocument();
    });
  });

  it("does not set up subscription when subscribe prop is false", async () => {
    render(<DataTable model="Todo" columns={mockColumns} client={mockClient} subscribe={false} />);

    expect(mockClient.models.Todo.observeQuery).not.toHaveBeenCalled();
  });

  it("sets up subscription when subscribe prop is true", () => {
    render(<DataTable model="Todo" columns={mockColumns} client={mockClient} subscribe={true} />);

    expect(mockClient.models.Todo.observeQuery).toHaveBeenCalled();
  });

  it("unsubscribes when component unmounts", () => {
    const { unmount } = render(<DataTable model="Todo" columns={mockColumns} client={mockClient} subscribe={true} />);

    unmount();

    expect(mockClient.models.Todo.observeQuery().subscribe().unsubscribe).toHaveBeenCalled();
  });
});