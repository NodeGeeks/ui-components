import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { OrderedList } from "./";

describe("OrderedList", () => {
  const mockData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  it("renders correctly", () => {
    render(<OrderedList value={mockData} />);
    mockData.forEach((item) => {
      expect(screen.getByText(`name: ${item.name}`)).toBeInTheDocument();
    });
  });

  it("allows dragging and dropping items", () => {
    const onOrderChange = jest.fn();
    render(<OrderedList value={mockData} onOrderChange={onOrderChange} />);
    const dragHandles = screen.getAllByLabelText("Drag handle");
    
    // Simulate drag and drop
    const dataTransfer = { getData: () => '0', setData: () => {} };
    fireEvent.dragStart(dragHandles[0], { dataTransfer });
    fireEvent.dragEnter(dragHandles[2], { dataTransfer });
    fireEvent.dragOver(dragHandles[2], { dataTransfer });
    fireEvent.dragLeave(dragHandles[0], { dataTransfer });
    fireEvent.drop(dragHandles[2], { dataTransfer });
    fireEvent.dragEnd(dragHandles[0], { dataTransfer });

    // Check if onOrderChange was called
    expect(onOrderChange).toHaveBeenCalled();

    // Get the first argument of the first call to onOrderChange
    const newOrder = onOrderChange.mock.calls[0][0];

    // Check if the new order is correct
    expect(newOrder).toEqual([
      { id: 2, name: "Item 2", order: 0 },
      { id: 1, name: "Item 1", order: 1 },
      { id: 3, name: "Item 3", order: 2 },
    ]);
  });
});