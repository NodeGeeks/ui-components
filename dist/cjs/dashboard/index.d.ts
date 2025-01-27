import React from "react";
interface PanelConfig {
    id: string;
    title: string;
    minWidth: string;
    minHeight: string;
    content: React.ReactNode;
}
interface DashboardProps {
    panels: PanelConfig[];
}
declare const Dashboard: React.FC<DashboardProps>;
export { Dashboard };
