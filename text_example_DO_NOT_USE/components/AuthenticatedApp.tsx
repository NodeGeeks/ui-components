import { Authenticator, View } from '@aws-amplify/ui-react';
import type { ReactNode } from 'react';
import DashboardLayout from './DashboardLayout';

interface AuthenticatedAppProps {
  children: ReactNode;
  signOut: () => void;
}

export default function AuthenticatedApp({ children, signOut }: AuthenticatedAppProps) {
  return (
    <Authenticator hideSignUp>
      {({ signOut: authSignOut }) => (
        <View>
          <div className="amplify-provider">
            <DashboardLayout signOut={() => {
              authSignOut?.();
              signOut();
            }}>
              {children}
            </DashboardLayout>
          </div>
        </View>
      )}
    </Authenticator>
  );
}