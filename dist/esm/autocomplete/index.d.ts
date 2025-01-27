import React from "react";
interface AutocompleteProps<T> {
    options: T[];
    displayProperty: keyof T;
    valueProperty: keyof T;
    value: T | null;
    onChange: (value: T | null) => void;
    label?: string;
}
declare function Autocomplete<T>({ options, displayProperty, valueProperty, value, onChange, label }: AutocompleteProps<T>): React.JSX.Element;
export { Autocomplete };
