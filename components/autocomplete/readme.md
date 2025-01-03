# Autocomplete Component

## Purpose
The Autocomplete component provides a searchable dropdown input that filters options as you type.

## Props
- `options`: Array of items to choose from
- `displayProperty`: Property to show in the dropdown
- `valueProperty`: Property to use as unique identifier
- `value`: Currently selected item
- `onChange`: Function called when selection changes
- `label`: Optional label for the input

## Example Usage
```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

function UserSelector() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <Autocomplete<User>
      options={users}
      displayProperty="name"
      valueProperty="id"
      value={selectedUser}
      onChange={setSelectedUser}
      label="Select User"
    />
  );
}
```

## Features
- Type-safe with TypeScript generics
- Keyboard navigation support
- Customizable display and value properties
- Automatic filtering of options
- Optional labeling