import React from "react";
import { AmplifyUIComponentType } from "../types";
export interface DynamicComponentProps {
    options: {
        component: AmplifyUIComponentType;
        props: Record<string, any>;
        children?: DynamicComponentProps[];
    };
}
declare const DynamicComponent: React.FC<DynamicComponentProps>;
export default DynamicComponent;
