import type { ReactElement } from 'react';
import dynamic from 'next/dynamic';

import * as AmplifyUI from '@aws-amplify/ui-react';

const DynamicComponent = dynamic(() => 
  import("../../../components/dynamic-component/DynamicBaseComponent").then(mod => mod.default),
  { 
    ssr: false,
    loading: () => <div>Loading dynamic component...</div>
  }
);

export default function DynamicComponentContent(): ReactElement {
  return (
    <AmplifyUI.Flex direction="column" gap="1rem">
      <AmplifyUI.Heading level={2}>Dynamic Component Example</AmplifyUI.Heading>

      <DynamicComponent
        options={{
          component: "Image",
          props: {
            alt: "Alternate description...",
            className: "w-100 flex",
            src: "https://docs.amplify.aws/assets/logo-dark.svg",
          },
        }}
      />

      <DynamicComponent
        options={{
          component: "Tabs",
          props: {
            justifyContent: "flex-start",
            defaultValue: "Tab 1",
            items: [
              { label: "Tab 1", value: "Tab 1", content: "Tab content #1" },
              { label: "Tab 2", value: "Tab 2", content: "Tab content #2" },
              { label: "Disabled tab", value: "Tab 3", content: "Tab content #3", isDisabled: true },
            ],
          },
        }}
      />

      <DynamicComponent
        options={{
          component: "Flex",
          props: { direction: "column", gap: "1rem" },
          children: [
            {options:{
              component: "TextField",
              props: { label: "Name", placeholder: "Enter your name" },
            }},
            {options:{
              component: "SelectField",
              props: {
                label: "Country",
                placeholder: "Select your country",
                options: ["USA", "Canada", "UK", "Australia"],
              },
            }},
            {options:{
              component: "Button",
              props: { children: "Submit" },
            }},
          ],
        }}
      />
    </AmplifyUI.Flex>
  );
}