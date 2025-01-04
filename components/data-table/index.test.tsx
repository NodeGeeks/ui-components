import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React, { act } from "react";
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
    await act(async () => {
      render(<DataTable model="Todo" columns={mockColumns} client={mockClient} />);
    });

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("opens create modal when create button is clicked", async () => {
    await act(async () => {
      render(<DataTable model="Todo" columns={mockColumns} client={mockClient} />);
    });

    await act(async () => {
      fireEvent.click(screen.getByTestId("create-record-button"));
    });

    expect(screen.getByTestId("dynamic-form")).toBeInTheDocument();
  });

  it("opens edit modal when edit button is clicked", async () => {
    await act(async () => {
      render(<DataTable model="Todo" columns={mockColumns} client={mockClient} />);
    });

    await act(async () => {
      fireEvent.click(screen.getAllByText("Edit")[0]);
    });

    expect(screen.getByText("Edit Record")).toBeInTheDocument();
  });

  it("does not set up subscription when subscribe prop is false", async () => {
    await act(async () => {
      render(<DataTable model="Todo" columns={mockColumns} client={mockClient} subscribe={false} />);
    });

    expect(mockClient.models.Todo.observeQuery).not.toHaveBeenCalled();
  });

  it("sets up subscription when subscribe prop is true", async () => {
    await act(async () => {
      render(<DataTable model="Todo" columns={mockColumns} client={mockClient} subscribe={true} />);
    });

    expect(mockClient.models.Todo.observeQuery).toHaveBeenCalled();
  });

  it("unsubscribes when component unmounts", async () => {
    let unmount: () => void;
    await act(async () => {
      const result = render(<DataTable model="Todo" columns={mockColumns} client={mockClient} subscribe={true} />);
      unmount = result.unmount;
    });

    act(() => {
      unmount();
    });

    expect(mockClient.models.Todo.observeQuery().subscribe().unsubscribe).toHaveBeenCalled();
  });
});