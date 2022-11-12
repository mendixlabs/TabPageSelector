import { Component, ReactNode } from "react";
import { Big } from "big.js";
import { TabPageSelectorContainerProps } from "../typings/TabPageSelectorProps";

export default class TabPageSelector extends Component<TabPageSelectorContainerProps> {
    render(): ReactNode {
        if (this.props.paneIndexByAttr === undefined) {
            console.error("Tab page selector not specified. Please specify the attribute to determine tab pane index.");
            return;
        }
        if (this.props.targetTabCtrl === undefined || this.props.targetTabCtrl.trim() === "") {
            console.error("Target tab container name not specified. Please specify the target tab container name.");
            return;
        }
        return "";
    }
    componentDidMount(): void {
        const div = this.getTargetDiv(this.props.targetTabCtrl);
        if (div != null) {
            const li = div.querySelectorAll("ul > li");
            if (li == null) {
                console.error("Unable find tab pages");
                return;
            }
            li.forEach((currentValue, _currentIndex, _listObj) => {
                currentValue.addEventListener(
                    "click",
                    () => {
                        this.props.paneIndexByAttr?.setValue(Big(_currentIndex + 1));
                    },
                    false
                );
            }, this);
        } else {
            throw new Error("Unable to find target Tab Container. Check above error logs for more info.");
        }
    }
    componentDidUpdate(
        _prevProps: Readonly<TabPageSelectorContainerProps>,
        _prevState: Readonly<{}>,
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        _snapshot?: any
    ): void {
        if (this.props.paneIndexByAttr.value === undefined) {
            console.error("Tab page selector not specified. Please specify the attribute to determine tab pane index.");
            return;
        }
        if (this.props.paneIndexByAttr.value.lte(Big(0))) {
            console.error("Tab page selector number cannot be less than or equal to zero.");
            return;
        }
        const div = this.getTargetDiv(this.props.targetTabCtrl);
        if (div != null) {
            const liList = div.querySelectorAll("ul > li");
            const li: HTMLElement = liList.item(
                parseInt(this.props.paneIndexByAttr.value.toString(), 10) - 1
            ) as HTMLElement;
            if (li == null) {
                console.debug("Determined tab page number is: " + this.props.paneIndexByAttr.value);
                console.error("Unable find tab page by specified number.");
            }
            if (li != null) {
                li.click();
            }
        } else {
            throw new Error("Unable to find target Tab Container. Check above error logs for more info.");
        }
    }
    getTargetDiv(targetTabCtrl: string): Element | null {
        const divList = document.getElementsByClassName("mx-name-" + targetTabCtrl);
        if (divList.length > 0) {
            const div = divList.item(0);
            if (div != null) {
                return div;
            } else {
                console.error("Tab container DOM element found, but unable to get it's referance.");
            }
        } else {
            console.error("Tab container DOM element not found. Please check provided taget tab container name.");
        }
        return null;
    }
}
