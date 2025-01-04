import { View } from "@aws-amplify/ui-react";
import React from "react";
import { Panel } from "../panel";

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

const Dashboard: React.FC<DashboardProps> = ({ panels }) => {
  return (
    <View as="div" className="flex flex-wrap gap-4 p-4">
      {panels.map((panel) => (
        <Panel
          key={panel.id}
          id={panel.id}
          title={panel.title}
          minWidth={panel.minWidth}
          minHeight={panel.minHeight}
        >
          {panel.content}
        </Panel>
      ))}
    </View>
  );
};

export { Dashboard };
