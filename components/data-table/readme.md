# DataTable Component

## Purpose
Dynamic table interface for displaying and managing data.

## Functionality
- Fetches and displays data from a specified model
- Supports creating new records
- Allows editing existing records
- Provides sorting functionality
- Optionally subscribes to real-time updates

## Props
- `model`: Data model identifier
- `columns`: Column configurations
- `client`: Data source client
- `subscribe`: Enable real-time updates

## Example Usage
```tsx
const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' }
];

function UserTable() {
  return (
    <DataTable
      model="User"
      columns={columns}
      client={apiClient}
      subscribe={true}
      onRowClick={(row) => console.log('Selected:', row)}
      options={{
        sortable: true,
        filterable: true,
        pagination: true
      }}
    />
  );
}
```

## Features
- Automatic CRUD operations
- Real-time data updates
- Sorting and filtering
- Pagination support
- Row selection
- Custom cell rendering