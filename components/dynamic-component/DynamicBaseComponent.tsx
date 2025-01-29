import type { ComponentType } from 'react';
import dynamic from 'next/dynamic';

// Import the entire Amplify UI React package
const AmplifyComponents = dynamic(() => 
  import('@aws-amplify/ui-react').then(mod => {
    return {
      Button: mod.Button,
      Card: mod.Card,
      Flex: mod.Flex,
      Heading: mod.Heading,
      Text: mod.Text,
      View: mod.View,
      Image: mod.Image,
      Tabs: mod.Tabs,
      TextField: mod.TextField,
      SelectField: mod.SelectField
    };
  }), 
  { 
    ssr: false,
    loading: () => <div>Loading component...</div>
  }
);

interface DynamicComponentProps {
  options: {
    component: string;
    props?: Record<string, any>;
    children?: Array<{ options: DynamicComponentProps['options'] }>;
  };
}

export function DynamicComponent({ options }: DynamicComponentProps) {
  if (typeof window === 'undefined') {
    return null;
  }

  const AmplifyUI = AmplifyComponents as any;
  const Component = AmplifyUI[options.component] as ComponentType<any>;
  
  if (!Component) {
    console.warn(`Component ${options.component} not found`);
    return null;
  }

  if (options.children) {
    return (
      <Component {...options.props}>
        {options.children.map((child, index) => (
          <DynamicComponent key={index} options={child.options} />
        ))}
      </Component>
    );
  }

  return <Component {...options.props} />;
}