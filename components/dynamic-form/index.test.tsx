import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { DynamicForm } from "./";

jest.mock("@aws-amplify/datastore", () => ({
  DataStore: {
    save: jest.fn(),
    query: jest.fn(),
    delete: jest.fn(),
  },
}));

describe("DynamicForm", () => {
  const mockData = {
    name: "John Doe",
    age: 30,
    birthdate: "1990-01-01",
    address: {
      street: "123 Main St",
      city: "Anytown",
    },
  };

  const mockOptions = {
    age: { type: "number" },
    birthdate: { type: "date", label: "Date of Birth" },
  };

  const mockResource = {
    fields: {
      name: { type: "text" },
      age: { type: "number" },
      birthdate: { type: "date" },
      address: {
        type: "object",
        fields: {
          street: { type: "text" },
          city: { type: "text" },
        },
      },
    },
  };


  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders form fields based on data including nested fields", () => {
    const mockOnChange = jest.fn();
    render(<DynamicForm data={mockData} onChange={mockOnChange} resource={mockResource} />);

    expect(screen.getByLabelText("name")).toBeInTheDocument();
    expect(screen.getByLabelText("age")).toBeInTheDocument();
    expect(screen.getByLabelText("birthdate")).toBeInTheDocument();
    expect(screen.getByLabelText("street")).toBeInTheDocument();
    expect(screen.getByLabelText("city")).toBeInTheDocument();
  });

  test("applies options correctly", () => {
    const mockOnChange = jest.fn();
    render(<DynamicForm data={mockData} onChange={mockOnChange} options={mockOptions} />);

    expect(screen.getByLabelText("name")).toHaveAttribute("type", "text");
    expect(screen.getByLabelText("age")).toHaveAttribute("type", "number");
    expect(screen.getByLabelText("Date of Birth")).toHaveAttribute("type", "date");
  });

  test("uses resource for field types when options are not provided", () => {
    const mockOnChange = jest.fn();
    render(<DynamicForm data={mockData} onChange={mockOnChange} resource={mockResource} />);

    expect(screen.getByLabelText("name")).toHaveAttribute("type", "text");
    expect(screen.getByLabelText("age")).toHaveAttribute("type", "number");
    expect(screen.getByLabelText("birthdate")).toHaveAttribute("type", "date");
  });

  // test("calls onChange when input values change including nested fields", () => {
  //   const mockOnChange = jest.fn();
  //   render(<DynamicForm data={mockData} onChange={mockOnChange} />);

  //   fireEvent.change(screen.getByLabelText("name"), { target: { value: "Jane Doe" } });
  //   expect(mockOnChange).toHaveBeenCalledWith({ ...mockData, name: "Jane Doe" });

  //   fireEvent.change(screen.getByLabelText("street"), { target: { value: "456 Elm St" } });
  //   expect(mockOnChange).toHaveBeenCalledWith({ ...mockData, address: { ...mockData.address, street: "456 Elm St" } });
  // });

  // test("handles new record creation", async () => {
  //   const mockOnChange = jest.fn();
  //   const newData = { ...mockData };

  //   render(<DynamicForm data={newData} onChange={mockOnChange} model={mockModel} />);

  //   fireEvent.click(screen.getByText("Create"));

  //   await waitFor(() => {
  //     expect(DataStore.save).toHaveBeenCalledWith(expect.any(mockModel));
  //   });
  // });

  // test("handles record update", async () => {
  //   const mockOnChange = jest.fn();
  //   const existingData = { ...mockData, id: "123" };

  //   (DataStore.query as jest.Mock).mockResolvedValue(existingData);
  //   const updatedData = { ...existingData, name: "Updated Name" };
  //   mockModel.copyOf.mockReturnValue(updatedData);

  //   render(<DynamicForm data={existingData} onChange={mockOnChange} model={mockModel} />);

  //   fireEvent.click(screen.getByText("Update"));

  //   await waitFor(() => {
  //     expect(DataStore.save).toHaveBeenCalledWith(updatedData);
  //   });
  //   expect(mockModel.copyOf).toHaveBeenCalledWith(existingData, expect.any(Function));
  // });

  // test("handles record deletion", async () => {
  //   const mockOnChange = jest.fn();
  //   const existingData = { ...mockData, id: "123" };

  //   (DataStore.query as jest.Mock).mockResolvedValue(existingData);

  //   render(<DynamicForm data={existingData} onChange={mockOnChange} model={mockModel} />);

  //   fireEvent.click(screen.getByText("Delete"));

  //   await waitFor(() => {
  //     expect(DataStore.delete).toHaveBeenCalledWith(existingData);
  //   });
  // });
});