import React from "react";
interface OrderedListProps {
    value: Array<Record<string, any>>;
    onOrderChange?: (newOrder: Array<Record<string, any>>) => void;
}
declare const OrderedList: React.FC<OrderedListProps>;
export default OrderedList;
