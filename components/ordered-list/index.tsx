import { Card, Flex, Icon, View } from "@aws-amplify/ui-react";
import React, { useState } from "react";

interface OrderedListProps<T> {
  value: T[];
  onOrderChange?: (items: T[]) => void;
}

export function OrderedList<T extends { id: number | string }>({ value, onOrderChange }: OrderedListProps<T>) {
  const [dragging, setDragging] = useState(false);
  const dragItem = React.useRef<number | null>(null);
  const dragNode = React.useRef<HTMLElement | null>(null);
  const [items] = useState(value.map((item, index) => ({ ...item, order: index })));
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (e: React.DragEvent | React.TouchEvent, index: number) => {
    dragItem.current = index;
    dragNode.current = e.target as HTMLElement;
    (e as React.DragEvent).dataTransfer.setData("text/plain", index.toString());
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const getTargetIndex = (e: React.DragEvent<HTMLDivElement>) => {
    const targetElement = e.target as HTMLElement;
    const cardElement = targetElement.closest("[data-index]");
    if (cardElement) {
      return parseInt(cardElement.getAttribute("data-index") || "-1", 10);
    }
    return -1;
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    const draggedIndex = Number(e.dataTransfer.getData("text/plain"));
    
    if (draggedIndex === targetIndex) return;

    const newItems = [...value];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggedItem);

    // Ensure all properties are preserved while updating order
    const reorderedItems = newItems.map((item, index) => ({
      ...item,
      order: index
    }));

    onOrderChange?.(reorderedItems);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    const targetIndex = getTargetIndex(e);
    if (targetIndex !== -1 && dragItem.current !== null && dragItem.current !== targetIndex) {
      handleDrop(e, targetIndex);
    }
  };

  const handleDragEnd = (e: DragEvent) => {
    const finalTargetIndex = getTargetIndex(e as unknown as React.DragEvent<HTMLDivElement>);
    if (finalTargetIndex !== -1 && dragItem.current !== null && dragItem.current !== finalTargetIndex) {
      handleDrop(e as unknown as React.DragEvent, finalTargetIndex);
    }
    setDragging(false);
    setDraggedIndex(null);
    dragNode.current?.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  return (
    <Flex direction="column">
      {items.map((item, index) => (
        <Card
          key={index}
          variation="outlined"
          padding="1rem"
          marginBottom="0.5rem"
          data-index={index}
          style={{
            opacity: dragging && draggedIndex === index ? 0.5 : 1,
            border: dragging && draggedIndex === index ? "2px dashed #007bff" : undefined
          }}
          aria-grabbed={dragging && draggedIndex === index}
          aria-dropeffect="move"
        >
          <Flex alignItems="center">
            <View
              as="div"
              padding="0.5rem"
              marginRight="0.5rem"
              backgroundColor="rgba(0,0,0,0.05)"
              borderRadius="4px"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onTouchStart={(e) => handleDragStart(e, index)}
              aria-label="Drag handle"
            >
              <Icon
                ariaLabel="Drag handle"
                viewBox={{ width: 24, height: 24 }}
                paths={[
                  { d: "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z" },
                ]}
              />
            </View>
            <Flex direction="column" style={{ userSelect: "none" }}>
              {Object.entries(item).map(([key, value]) => (
                key !== "order" && <p key={key}>{`${key}: ${value}`}</p>
              ))}
            </Flex>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};
