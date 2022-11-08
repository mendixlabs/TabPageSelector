/**
 * This file was generated from TabSelector.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface TabSelectorContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    paneIndexByAttr?: EditableValue<BigJs.Big>;
    targetTabCtrl: string;
}

export interface TabSelectorPreviewProps {
    class: string;
    style: string;
    paneIndexByAttr: string;
    targetTabCtrl: string;
}
