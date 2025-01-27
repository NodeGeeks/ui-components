import React from "react";
interface PopoverProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    anchorEl: HTMLElement | null;
}
declare const Popover: React.FC<PopoverProps>;
export { Popover };
