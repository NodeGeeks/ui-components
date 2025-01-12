import { DynamicForm } from "@components/dynamic-form";
import { Panel } from "@components/panel";
import { SortableTable } from "@components/table";
import React from "react";

const PanelExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Panel
        id="panel-1"
        title="Table Panel"
        minWidth="w-1/2"
        minHeight="h-64"
        location={{ neighbor: "panel-2", position: "nextto" }}
      >
        <SortableTable data={[]} columns={[]} />
      </Panel>
      <Panel
        id="panel-2"
        title="Form Panel"
        minWidth="w-1/2"
        minHeight="h-64"
        location={{ neighbor: "panel-1", position: "nextto" }}
      >
        <DynamicForm data={{}} onChange={() => {}} />
      </Panel>
    </div>
  );
};

export default PanelExample;