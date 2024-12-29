import React from "react";
interface PanelConfig {
    id: string;
    title: string;
    minWidth: string;
    minHeight: string;
    location?: {
        neighbor: string;
        position: "below" | "nextto";
    };
    content: React.ReactNode;
}
interface DashboardProps {
    panels: PanelConfig[];
}
declare const Dashboard: React.FC<DashboardProps>;
export default Dashboard;
