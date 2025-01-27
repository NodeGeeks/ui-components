import React from "react";
export declare enum FormFieldType {
    Text = "text",
    Number = "number",
    Date = "date",
    Boolean = "boolean",
    Object = "object",
    List = "list"
}
interface DynamicFormProps {
    data: any;
    onChange: (newData: any) => void;
    onSubmit?: (newData: any) => void;
    options?: {
        [key: string]: {
            type: string;
            label?: string;
        };
    };
    resource?: {
        fields: {
            [key: string]: {
                type: string;
            };
        };
    };
    model?: any;
}
declare const DynamicForm: React.FC<DynamicFormProps>;
export { DynamicForm };
