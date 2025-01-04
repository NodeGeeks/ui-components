import * as UI from "@aws-amplify/ui-react";
import React from "react";

export interface DynamicComponentProps {
  options: {
    component: string;
    props: Record<string, any>;
    children?: any[];
  }
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ options }) => {
  const { component, props, children } = options;
  
  // Check if the component exists in Amplify UI
  if (!(component in UI)) {
    console.error(`Component ${component} not found in Amplify UI`);
    return null;
  }

  const Component = UI[component as keyof typeof UI] as React.ComponentType<any>;

  // If props contain children and there are no nested components, pass props directly
  if (props.children && !children) {
    return <Component {...props} />;
  }

  // Render children if they exist
  const renderedChildren = children?.map((child, index) => (
    <DynamicComponent key={index} options={child} />
  ));

  // Remove children from props to avoid conflicts
  const { children: _, ...restProps } = props;
  return <Component {...restProps}>{renderedChildren}</Component>;
};

export { DynamicComponent };
