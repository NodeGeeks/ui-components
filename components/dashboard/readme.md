# Dashboard Component

## Purpose
The Dashboard component provides a flexible layout for displaying multiple panels of content in a dashboard-like interface.

## Functionality
- Renders multiple panels based on provided configuration
- Supports custom positioning of panels relative to each other
- Allows for flexible sizing of panels

## Props
- `panels`: Array of panel configurations, each containing:
  - `id`: Unique identifier for the panel
  - `title`: Title of the panel
  - `minWidth`: Minimum width of the panel
  - `minHeight`: Minimum height of the panel
  - `location`: Optional positioning relative to other panels
  - `content`: React node to be rendered inside the panel

## Usage
This component is ideal for creating customizable dashboards or layouts where multiple pieces of content need to be displayed in an organized manner.

## Example Usage
```jsx
import React from 'react';
import Dashboard from './Dashboard';

const panels = [
  {
    id: 'panel1',
    title: 'Panel 1',
    minWidth: 300,
    minHeight: 200,
    content: <div>Content for Panel 1</div>,
  },
  {
    id: 'panel2',
    title: 'Panel 2',
    minWidth: 300,
    minHeight: 200,
    content: <div>Content for Panel 2</div>,
  },
  {
    id: 'panel3',
    title: 'Panel 3',
    minWidth: 300,
    minHeight: 200,
    content: <div>Content for Panel 3</div>,
  },
];

const App = () => (
  <Dashboard panels={panels} />
);

export default App;