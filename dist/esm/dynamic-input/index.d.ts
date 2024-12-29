import React from "react";
export declare enum FormFieldType {
    Text = "text",
    Number = "number",
    Date = "date",
    Boolean = "boolean",
    Object = "object",
    List = "list"
}
interface DynamicInputProps {
    id?: string;
    data: any;
    path: string;
    onChange: (newData: any) => void;
    label?: string;
    type?: string;
}
declare const DynamicInput: React.FC<DynamicInputProps>;
export default DynamicInput;
