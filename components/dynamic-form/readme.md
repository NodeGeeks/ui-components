# DynamicForm Component

## Purpose
The DynamicForm component provides a dynamic form generation based on a specified data model.

## Props
- `data`: Initial data for the form
- `onChange`: Function called when form data changes
- `model`: String identifier for the data model

md## Example Usage
```tsx
interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const initialData: UserFormData = {
  firstName: "",
  lastName: "",
  email: "",
  age: 0
};

function UserForm() {
  const [formData, setFormData] = useState<UserFormData>(initialData);

  const handleSubmit = (data: UserFormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <DynamicForm
      data={formData}
      onChange={setFormData}
      model="user"
      onSubmit={handleSubmit}
    />
  );
}
```

## Features
- Automatic form field generation
- Built-in validation
- Support for complex nested objects
- Real-time data updates
- Customizable field rendering
- Support for various input types:
  - Text inputs
  - Number inputs
  - Date pickers
  - Dropdowns
  - Checkboxes
  - Radio buttons

## Model Configuration
Models can be configured using a schema definition:

```typescript
const userModel = {
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  email: { type: 'string', format: 'email' },
  age: { type: 'number', min: 0, max: 120 }
};

