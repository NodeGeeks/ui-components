import React from "react";
interface OrderedListProps<T> {
    value: T[];
    onOrderChange?: (items: T[]) => void;
}
export declare function OrderedList<T extends {
    id: number | string;
}>({ value, onOrderChange }: OrderedListProps<T>): React.JSX.Element;
export {};
