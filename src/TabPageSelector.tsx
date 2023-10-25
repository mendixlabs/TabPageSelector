import { Component, ReactNode } from "react";
import { Big } from "big.js";
import { TabPageSelectorContainerProps } from "../typings/TabPageSelectorProps";

type TabPageSelectorState = { currentTabIndex: number };

export default class TabPageSelector extends Component<TabPageSelectorContainerProps, TabPageSelectorState> {
    constructor(props: TabPageSelectorContainerProps | Readonly<TabPageSelectorContainerProps>) {
        super(props);
        this.state = {
            currentTabIndex: 0
        };
    }

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
        this.checkTargetDivPresent(this.props.targetTabCtrl);
        if (document.querySelectorAll(".mx-name-" + this.props.targetTabCtrl + " > ul > li").length == 0) {
            console.error("Unable find tab pages");
            return;
        }
        document
            .querySelectorAll(".mx-name-" + this.props.targetTabCtrl + " > ul")
            .forEach((ultValue, _ulIndex, _listObj) => {
                ultValue.querySelectorAll("li").forEach((currentValue, _currentIndex, _listObj) => {
                    currentValue.addEventListener(
                        "click",
                        () => {
                            if (_currentIndex !== this.state.currentTabIndex) {
                                this.setState({ currentTabIndex: _currentIndex });
                                this.props.paneIndexByAttr?.setValue(Big(_currentIndex + 1));
                                if (
                                    this.props.onChangeAction != undefined &&
                                    this.props.onChangeAction.canExecute &&
                                    !this.props.onChangeAction.isExecuting
                                ) {
                                    console.debug("Executing action for TabPageSelector ", this.props.name);
                                    this.props.onChangeAction.execute();
                                }
                            }
                        },
                        false
                    );
                }, this);
            }, this);
    }
    componentDidUpdate(
        _prevProps: Readonly<TabPageSelectorContainerProps>,
        _prevState: Readonly<TabPageSelectorState>,
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
        this.checkTargetDivPresent(this.props.targetTabCtrl);
        if (document.querySelectorAll(".mx-name-" + this.props.targetTabCtrl + " > ul > li").length == 0) {
            console.error("Unable find tab pages");
            return;
        }
        const liIndix: number = parseInt(this.props.paneIndexByAttr.value.toString(), 10) - 1;
        document
            .querySelectorAll(".mx-name-" + this.props.targetTabCtrl + " > ul")
            .forEach((ultValue, _ulIndex, _listObj) => {
                const liList = ultValue.querySelectorAll("li");
                const li: HTMLElement = liList.item(liIndix) as HTMLElement;
                if (li == null) {
                    console.debug("Determined tab page number is: " + this.props.paneIndexByAttr.value);
                    console.error("Unable find tab page by specified number.");
                }
                if (li != null && !li.classList.contains("active")) {
                    li.click();
                }
            }, this);
    }
    checkTargetDivPresent(targetTabCtrl: string): void {
        const divList = document.getElementsByClassName("mx-name-" + targetTabCtrl);
        if (divList.length == 0) {
            throw new Error("Tab container DOM element not found. Please check provided target tab container name.");
        }
    }
}
