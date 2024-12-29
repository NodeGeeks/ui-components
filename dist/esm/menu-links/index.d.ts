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
}
declare const MenuLinks: React.FC<MenuLinksProps>;
export default MenuLinks;
