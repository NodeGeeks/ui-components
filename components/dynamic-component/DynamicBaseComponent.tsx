import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import React from 'react';

// Import the entire Amplify UI React package
const AmplifyComponents = {
  Button: dynamic(() => import('@aws-amplify/ui-react').then(mod => mod.Button), { ssr: false, loading: () => <div>Loading component...</div> }),
  Card: dynamic(() => import('@aws-amplify/ui-react').then(mod => mod.Card), { ssr: false, loading: () => <div>Loading component...</div> }),
  Flex: dynamic(() => import('@aws-amplify/ui-react').then(mod => mod.Flex), { ssr: false, loading: () => <div>Loading component...</div> }),
  Heading: dynamic(() => import('@aws-amplify/ui-react').then(mod => mod.Heading), { ssr: false, loading: () => <div>Loading component...</div> }),
  Text: dynamic(() => import('@aws-amplify/ui-react').then(mod => mod.Text), { ssr: false, loading: () => <div>Loading component...</div> }),
  View: dynamic(() => import('@aws-amplify/ui-react').then(mod => mod.View), { ssr: false, loading: () => <div>Loading component...</div> }),
  Image: dynamic(() => import('@aws-amplify/ui-react').then(mod => mod.Image), { ssr: false, loading: () => <div>Loading component...</div> }),
  Tabs: dynamic(() => import('@aws-amplify/ui-react').then(mod => mod.Tabs), { ssr: false, loading: () => <div>Loading component...</div> }),
  TextField: dynamic(() => import('@aws-amplify/ui-react').then(mod => mod.TextField), { ssr: false, loading: () => <div>Loading component...</div> }),
  SelectField: dynamic(() => import('@aws-amplify/ui-react').then(mod => mod.SelectField), { ssr: false, loading: () => <div>Loading component...</div> })
};

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