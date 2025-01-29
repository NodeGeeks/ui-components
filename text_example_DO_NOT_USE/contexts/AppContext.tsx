

import React, { useContext, useMemo, useState, type ReactNode } from 'react';

interface AppContextType {
  // Add any app-wide state here that isn't related to UI theming
}

const defaultContextValue: AppContextType = {};

const AppContext = React.createContext<AppContextType>(defaultContextValue);

AppContext.displayName = 'AppContext';

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }

  return context;
};

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps): JSX.Element => {
  const value = useMemo(() => ({}), []);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};