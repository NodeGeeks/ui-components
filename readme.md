# @nodegeeks/ui-components

React component library built on AWS Amplify UI Generation 2, providing advanced UI components for modern web applications.

[![npm version](https://badge.fury.io/js/@nodegeeks%2Fui-components.svg)](https://www.npmjs.com/package/@nodegeeks/ui-components)

## Installation

```bash
npm install @nodegeeks/ui-components @aws-amplify/ui-react aws-amplify
```

## Quick Start

1. Import styles in your app's entry point:
```tsx
import '@aws-amplify/ui-react/styles.css';
```

2. Import and use components:
```tsx
import { SortableTable, Panel, Dashboard } from '@nodegeeks/ui-components';
```

## Components

### SortableTable
Advanced data table with sorting and filtering:
```tsx
import { SortableTable } from '@nodegeeks/ui-components;

const MyTable = () => (
  <SortableTable
    data={tableData}
    columns={tableColumns}
    filter={true}
  />
);
```

### Dashboard
Flexible dashboard layout system:
```tsx
import { Dashboard } from '@nodegeeks/ui-components;

const MyDashboard = () => (
  <Dashboard panels={dashboardConfig} />
);
```

### More Components
- Panel: Container component
- DynamicComponent: Runtime component renderer
- ColorSelection: Color picker with HEX/RGB support

## Requirements

- React ≥18.0.0
- @aws-amplify/ui-react ≥5.0.0
- aws-amplify ≥5.0.0

## Documentation

Detailed documentation for each component available at:
https://github.com/nodegeeks/ui-components/docs

## TypeScript Support

This package includes TypeScript definitions. No additional @types packages are required.

## Version Compatibility

- AWS Amplify UI Gen2: ✅
- React 18+: ✅
- AWS Amplify CLI v12+: ✅

## Support

- Issues: https://github.com/nodegeeks/ui-components/issues
- Discussions: https://github.com/nodegeeks/ui-components/discussions

## License

MIT
