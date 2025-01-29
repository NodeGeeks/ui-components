import { MenuLinks } from '@components/menu-links';
import Head from 'next/head';
import type { ReactElement } from 'react';

interface DashboardLayoutProps {
  signOut?: () => void;
  children: React.ReactNode;
}

export default function DashboardLayout({ signOut, children }: DashboardLayoutProps): ReactElement {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow">
          <div className="px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={signOut}
            >
              Logout
            </button>
          </div>
        </header>
        <div className="flex-1 flex gap-4 p-4">
          <aside className="w-64 bg-white rounded shadow">
            <MenuLinks
              label="Components"
              items={[
                { path: "/components/modal", label: "Modal" },
                { path: "/components/menu-links", label: "MenuLinks" },
                { path: "/components/table", label: "Table" },
                { path: "/components/data-table", label: "DataTable" },
                { path: "/components/multi-select-field", label: "MultiSelectField" },
                { path: "/components/chip", label: "Chip" },
                { path: "/components/autocomplete", label: "Autocomplete" },
                { path: "/components/ordered-list", label: "OrderedList" },
                { path: "/components/popover", label: "Popover" },
                { path: "/components/color-selection", label: "ColorSelection" },
                { path: "/components/dynamic-input", label: "DynamicInput" },
                { path: "/components/dynamic-form", label: "DynamicForm" },
                { path: "/components/dynamic-component", label: "DynamicComponent" },
                { path: "/components/panel", label: "Panel" },
                { path: "/components/nodegeeks-react-wysiwyg-editor", label: "WYSIWYG"}
              ]}
            />
            <MenuLinks
              label="Dashboards"
              items={[
                { path: "/dashboard", label: "Custom" },
                { path: "/dashboard/2", label: "Support" },
              ]}
            />
          </aside>
          <main className="flex-1 bg-white rounded shadow overflow-auto">
            {children}
          </main>
        </div>
        <footer className="bg-white shadow mt-4">
          <div className="px-4 py-3 text-gray-600">
            Footer
          </div>
        </footer>
      </div>
    </>
  );
}