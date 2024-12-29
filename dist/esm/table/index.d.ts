import React from "react";
interface TableProps {
    data: Array<Record<string, any>>;
    columns: Array<{
        key: string;
        label: string;
        template?: (row: Record<string, any>) => React.ReactNode;
        headerTemplate?: (column: {
            key: string;
            label: string;
        }, sortInfo: {
            sortColumn: string | null;
            sortDirection: "asc" | "desc";
        }) => React.ReactNode;
    }>;
    filter?: boolean;
    filterBy?: string;
}
declare const SortableTable: React.FC<TableProps>;
export default SortableTable;
