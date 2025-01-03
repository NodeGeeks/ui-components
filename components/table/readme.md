# Table Component

## Purpose
The Table component renders a sortable table with customizable columns and data.

## Functionality
- Displays data in a tabular format
- Supports sorting by clicking on column headers
- Allows custom rendering of cell content

## Props
- `data`: Array of objects representing table rows (Array<Record<string, any>>)
- `columns`: Array of column configurations (Array<{
    key: string;
    label: string;
    template?: (row: Record<string, any>) => React.ReactNode;
  }>)
- `filter`: Enable/disable filtering (boolean, optional)
- `filterBy`: Column key to filter by (string, optional)

## Usage
This component is useful for displaying and organizing large sets of data, especially when sorting capabilities are needed.

## Example Usage
```jsx
import React from 'react';
import Table from './Table';

const data = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Sam Johnson', age: 45 },
];

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age', template: (row) => <strong>{row.age}</strong> },
];

const App = () => (
  <Table
    data={data}
    columns={columns}
    filter={true}
    filterBy="name"
  />
);

export default App;