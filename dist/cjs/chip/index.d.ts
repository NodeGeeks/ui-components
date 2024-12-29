import { ComboBoxOption } from "@aws-amplify/ui-react";
import React from "react";
export interface ChipProps {
    value: string;
    onChange: (value: string) => void;
    options?: Array<ComboBoxOption>;
    label: string;
}
declare const Chip: React.FC<ChipProps>;
export default Chip;
