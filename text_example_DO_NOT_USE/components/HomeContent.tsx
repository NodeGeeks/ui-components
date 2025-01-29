import type { ReactElement } from 'react';
import { useAppContext } from '../contexts/AppContext';
import dynamic from 'next/dynamic';

import * as AmplifyUI from '@aws-amplify/ui-react';

export default function HomeContent(): ReactElement {
    const { theme } = useAppContext();
    
    return (
        <AmplifyUI.Flex>
            <AmplifyUI.Text>Getting started - Current theme: {theme}</AmplifyUI.Text>
        </AmplifyUI.Flex>
    );
}