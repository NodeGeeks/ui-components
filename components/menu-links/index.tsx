import { Divider, Link } from "@aws-amplify/ui-react";
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

const MenuLinks = ({ items, label, onNavigate }: MenuLinksProps) => {
  const handleClick = async (item: MenuItem) => {
    if (item.preloadData) {
      await item.preloadData();
    }
    if (onNavigate) {
      await onNavigate(item.path, item.params);
    } else {
      window.location.href = item.path;
    }
  };

  return (
    <div className="mb-2">
      {label ? <span className="text-lg">{label}</span>: null}
      <nav className="grid grid-cols-1">
        {items.map((item, index) => (
          <div key={item.path}>
            <Link
              className="min-w-full m-2"
              onClick={() => handleClick(item)}
            >
              {item.icon && <i className={`m-2 ${item.icon}`} />}
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <Divider className="divide-red-500" size="small" orientation="horizontal" />
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export { MenuLinks };
