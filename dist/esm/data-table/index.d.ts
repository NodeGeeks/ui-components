import React from "react";
interface DataTableProps {
    model: string;
    columns: Array<{
        key: string;
        label: string;
    }>;
    client: any;
    subscribe?: boolean;
}
declare const DataTable: React.FC<DataTableProps>;
export default DataTable;
