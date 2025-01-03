# Modal Component

## Purpose
The Modal component provides a reusable overlay dialog for displaying content.

## Props
- `isOpen`: Boolean to control modal visibility
- `onClose`: Function called when modal closes
- `title`: Optional modal title
- `children`: Content to render inside modal

## Example Usage
```tsx
function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title="Example Modal"
      >
        <View padding="1rem">
          <Text>This is the modal content</Text>
          <Button onClick={handleClose}>Close</Button>
        </View>
      </Modal>
    </>
  );
}
```

## Features
- Backdrop click handling
- Focus trap within modal
- Keyboard escape key support
- Customizable header and content
- Accessible by default (ARIA attributes)