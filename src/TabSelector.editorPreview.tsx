import { Component, ReactNode } from "react";
import { TabSelectorPreviewProps } from "../typings/TabSelectorProps";

declare function require(name: string): string;

export class preview extends Component<TabSelectorPreviewProps> {
    render(): ReactNode {
        return "";
    }
}

export function getPreviewCss(): string {
    return require("./ui/TabSelector.css");
}
