import React from "react";
interface PanelProps {
    id: string;
    title: string;
    minWidth: string;
    minHeight: string;
    location?: {
        neighbor: string;
        position: "below" | "nextto";
    };
    children: React.ReactNode;
}
declare const Panel: React.FC<PanelProps>;
export default Panel;
