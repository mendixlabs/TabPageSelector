import { Component, ReactNode } from "react";
import { Big } from "big.js";
import { TabPageSelectorContainerProps } from "../typings/TabPageSelectorProps";

export default class TabPageSelector extends Component<TabPageSelectorContainerProps> {
    render(): ReactNode {        
        if(this.props.paneIndexByAttr === undefined)
        {
            console.error("Tab page selector not specified. Please specify the attribute to determine tab pane index.");
            return;
        }    
        if(this.props.targetTabCtrl === undefined || this.props.targetTabCtrl.trim() == '')
        {
            console.error("Target tab container name not specified. Please specify the target tab container name.");
            return;
        }      
        return "";
    }
    componentDidMount(): void {
        let div = document.getElementsByClassName("mx-name-" + this.props.targetTabCtrl);
        if(div.length > 0 && div.item(0) != null)
        {
            let li =div.item(0)!.querySelectorAll('ul > li');
            if(li == null)
            {
                console.error("Unable find tab pane index by specified index.");
                return;
            }            
            li.forEach(
                 (currentValue, _currentIndex, _listObj) => {
                    currentValue.addEventListener("click", () => {
                        this.props.paneIndexByAttr?.setValue(Big(_currentIndex+1));
                    }, false);
                },
                this
            );
        }
        else
        {
            console.error("Tab container DOM element not found. Please check provided taget tab container name.");
            return;
        }
    }
    componentDidUpdate(_prevProps: Readonly<TabPageSelectorContainerProps>, _prevState: Readonly<{}>, _snapshot?: any): void {
        if(this.props.paneIndexByAttr!.value === undefined)
        {
            console.error("Tab page selector not specified. Please specify the attribute to determine tab pane index.");
            return;
        }  
        if(this.props.paneIndexByAttr!.value.lte(Big(0)))
        {
            console.error("Tab page selector number cannot be less than or equal to zero.");
            return;
        }
        let div = document.getElementsByClassName("mx-name-" + this.props.targetTabCtrl);
        if(div.length > 0 && div.item(0) != null)
        {
            let liList =div.item(0)!.querySelectorAll('ul > li');
            let li: HTMLElement = liList.item(parseInt(this.props.paneIndexByAttr!.value!.toString()!)-1) as HTMLElement;
            if(li == null)
            {
                console.debug("Determined tab page index is: " + this.props.paneIndexByAttr!.value);
                console.error("Unable find tab page index by specified index.")
            }          
            
            li.click()
        }        
    }
}
