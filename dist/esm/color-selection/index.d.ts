import React from "react";
interface ColorSelectionProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    output?: "rgb" | "hex";
}
declare const ColorSelection: React.FC<ColorSelectionProps>;
export { ColorSelection };
