/**
 * This file was generated from TabPageSelector.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface TabPageSelectorContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    targetTabCtrl: string;
    paneIndexByAttr: EditableValue<BigJs.Big>;
    onChangeAction?: ActionValue;
}

export interface TabPageSelectorPreviewProps {
    class: string;
    style: string;
    targetTabCtrl: string;
    paneIndexByAttr: string;
    onChangeAction: {} | null;
}
