import { ThemeProvider, createTheme } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import type { ReactElement } from 'react';
import outputs from "../amplify_outputs.json";

// Import AuthenticatedApp directly to avoid dynamic imports
import AuthenticatedApp from '../components/AuthenticatedApp';

// Styles
import "@aws-amplify/ui-react/styles.css";
import "tailwindcss/tailwind.css";
import "../styles/app.css";
import "../styles/globals.css";

// Initialize Amplify at module level
if (typeof window !== 'undefined') {
  Amplify.configure(outputs);
}

// Components
import { AppContextProvider } from '../contexts/AppContext';

const signOut = () => {
  console.log("Sign out");
};

// Wrap entire app with theme provider
const AppWithTheme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={createTheme()}>
    {children}
  </ThemeProvider>
);

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AppWithTheme>
      <AppContextProvider>
        <AuthenticatedApp signOut={signOut}>
          <Component {...pageProps} />
        </AuthenticatedApp>
      </AppContextProvider>
    </AppWithTheme>
  );
};

export default App;

