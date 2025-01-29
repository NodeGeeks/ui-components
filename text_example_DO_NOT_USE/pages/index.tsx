import type { ReactElement } from 'react';
import dynamic from 'next/dynamic';

const HomeContent = dynamic(() => import('../components/HomeContent'), {
    ssr: false
});

export default function HomePage(): ReactElement {
    return <HomeContent />;
}
