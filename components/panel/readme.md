# Panel Component

## Purpose
The Panel component creates a container for content within a dashboard or layout.

## Functionality
- Renders a container with a title and content area
- Supports custom positioning and sizing
- Can be used as a building block for dashboard layouts

## Props
- `id`: Unique identifier for the panel
- `title`: Title of the panel
- `minWidth`: Minimum width of the panel
- `minHeight`: Minimum height of the panel
- `location`: Optional positioning relative to other panels
- `children`: Content to be rendered inside the panel

## Usage
This component is typically used within a Dashboard component to create flexible, customizable layouts.

## Example Usage
```jsx
<Panel id="panel1" title="Panel 1" minWidth={300} minHeight={200}>
  <div>Content for Panel 1</div>
</Panel>

<Panel id="panel2" title="Panel 2" minWidth={300} minHeight={200}>
  <div>Content for Panel 2</div>
</Panel>