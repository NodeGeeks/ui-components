import React from "react";
interface Option {
    value: string;
    label: string;
}
interface MultiSelectFieldProps {
    options: Option[];
    onChange: (selectedValues: string[]) => void;
    label: string;
}
declare const MultiSelectField: React.FC<MultiSelectFieldProps>;
export default MultiSelectField;
