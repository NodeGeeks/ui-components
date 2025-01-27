import React from "react";
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
export { MenuLinks };
