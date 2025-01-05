import { View } from "@aws-amplify/ui-react";
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

const Dashboard: React.FC<DashboardProps> = ({ panels }) => {
  return (
    <View as="div" className="flex flex-wrap gap-4 p-4">
      {panels.map((panel) => (
        <div className={`${panel.minWidth} ${panel.minHeight}`} key={panel.id} id={panel.id} style={{
          padding: '1rem',
          borderRadius: 'var(--amplify-radii-medium)',
        }}>
          <h2 style={{ marginBlockEnd: '1rem', fontWeight: 'var(--amplify-font-weights-bold)' }}>
            {panel.title}
          </h2>
          <div className="panel-body">
            {panel.content}
          </div>
        </div>
      ))}
    </View>
  );
};

export { Dashboard };
