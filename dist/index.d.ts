import React from 'react';
import { ComboBoxOption } from '@aws-amplify/ui-react';

interface AutocompleteProps<T> {
    options: T[];
    displayProperty: keyof T;
    valueProperty: keyof T;
    value: T | null;
    onChange: (value: T | null) => void;
    label?: string;
}
declare function Autocomplete<T>({ options, displayProperty, valueProperty, value, onChange, label }: AutocompleteProps<T>): React.JSX.Element;

interface ChipProps {
    value: string;
    onChange: (value: string) => void;
    options?: Array<ComboBoxOption>;
    label: string;
}
declare const Chip: React.FC<ChipProps>;

interface ColorSelectionProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    output?: "rgb" | "hex";
}
declare const ColorSelection: React.FC<ColorSelectionProps>;

interface PanelConfig {
    id: string;
    title: string;
    minWidth: string;
    minHeight: string;
    content: React.ReactNode;
}
interface DashboardProps {
    panels: PanelConfig[];
}
declare const Dashboard: React.FC<DashboardProps>;

interface DataTableProps {
    model: string;
    columns: Array<{
        key: string;
        label: string;
    }>;
    client: any;
    subscribe?: boolean;
}
declare const DataTable: React.FC<DataTableProps>;

interface DynamicComponentProps {
    options: {
        component: string;
        props: Record<string, any>;
        children?: any[];
    };
}
declare const DynamicComponent: React.FC<DynamicComponentProps>;

declare enum FormFieldType {
    Text = "text",
    Number = "number",
    Date = "date",
    Boolean = "boolean",
    Object = "object",
    List = "list"
}
interface DynamicFormProps {
    data: any;
    onChange: (newData: any) => void;
    onSubmit?: (newData: any) => void;
    options?: {
        [key: string]: {
            type: string;
            label?: string;
        };
    };
    resource?: {
        fields: {
            [key: string]: {
                type: string;
            };
        };
    };
    model?: any;
}
declare const DynamicForm: React.FC<DynamicFormProps>;

interface DynamicInputProps {
    id?: string;
    data: any;
    path: string;
    onChange: (newData: any) => void;
    label?: string;
    type?: string;
}
declare const DynamicInput: React.FC<DynamicInputProps>;

interface MenuItem {
    path: string;
    label: string;
    icon?: string;
    params?: Record<string, string>;
    preloadData?: () => Promise<any>;
}
interface MenuLinksProps {
    items: MenuItem[];
    label?: string;
    onNavigate?: (path: string, params?: Record<string, string>) => Promise<void>;
}
declare const MenuLinks: ({ items, label, onNavigate }: MenuLinksProps) => React.JSX.Element;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;

interface Option {
    value: string;
    label: string;
}
interface MultiSelectFieldProps {
    options: Option[];
    onChange: (selectedValues: string[]) => void;
    label: string;
}
declare const MultiSelectField: React.FC<MultiSelectFieldProps>;

interface OrderedListProps<T> {
    value: T[];
    onOrderChange?: (items: T[]) => void;
}
declare function OrderedList<T extends {
    id: number | string;
}>({ value, onOrderChange }: OrderedListProps<T>): React.JSX.Element;

interface PanelProps {
    id: string;
    title: string;
    minWidth: string;
    minHeight: string;
    location?: {
        neighbor: string;
        position: "below" | "nextto";
    };
    children: React.ReactNode;
}
declare const Panel: React.FC<PanelProps>;

interface PopoverProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    anchorEl: HTMLElement | null;
}
declare const Popover: React.FC<PopoverProps>;

interface TableProps {
    data: Array<Record<string, any>>;
    columns: Array<{
        key: string;
        label: string;
        template?: (row: Record<string, any>) => React.ReactNode;
        headerTemplate?: (column: {
            key: string;
            label: string;
        }, sortInfo: {
            sortColumn: string | null;
            sortDirection: "asc" | "desc";
        }) => React.ReactNode;
    }>;
    filter?: boolean;
    filterBy?: string;
    'data-testid'?: string;
}
declare const SortableTable: React.FC<TableProps>;

export { Autocomplete, Chip, ColorSelection, Dashboard, DataTable, DynamicComponent, type DynamicComponentProps, DynamicForm, DynamicInput, FormFieldType, MenuLinks, Modal, MultiSelectField, OrderedList, Panel, Popover, SortableTable };
