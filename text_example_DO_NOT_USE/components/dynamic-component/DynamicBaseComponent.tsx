import type { ComponentType, ReactElement } from 'react';
import dynamic from 'next/dynamic';

import * as AmplifyUI from '@aws-amplify/ui-react';

interface DynamicComponentProps {
  options: {
    component: keyof Omit<typeof AmplifyUI, 'ThemeProvider'>;
    props?: Record<string, any>;
    children?: Array<{ options: DynamicComponentProps['options'] }>;
  };
}

export default function DynamicComponent({ options }: DynamicComponentProps): ReactElement | null {
  if (typeof window === 'undefined') {
    return null;
  }

  // Get component from AmplifyUI and ensure it's wrapped with ThemeProvider context
  const Component = AmplifyUI[options.component] as ComponentType<any>;
  
  // Early return if component not found
  if (!Component) {
    console.warn(`Component ${options.component} not found`);
    return null;
  }
  
  // Use component directly to maintain existing theme context
  const ComponentWithTheme = Component;
  
  if (!Component) {
    console.warn(`Component ${options.component} not found`);
    return null;
  }

  if (options.children) {
    return (
      <ComponentWithTheme {...options.props}>
        {options.children.map((child, index) => (
          <DynamicComponent key={index} options={child.options} />
        ))}
      </ComponentWithTheme>
    );
  }

  return <ComponentWithTheme {...options.props} />;
}