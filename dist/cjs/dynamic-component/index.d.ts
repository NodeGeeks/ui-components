import React from "react";
export interface DynamicComponentProps {
    options: {
        component: string;
        props: Record<string, any>;
        children?: any[];
    };
}
declare const DynamicComponent: React.FC<DynamicComponentProps>;
export { DynamicComponent };
