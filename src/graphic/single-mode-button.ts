import {ViewItem} from "../view-item";
import {SingleMode} from "./mode/single-mode";

export class SingleModeButton extends ViewItem{
    constructor(public mode: SingleMode, public element: HTMLElement){
        super(element);
        this.setStyle("border-bottom", "0px solid");
        this.setStyle("border-bottom-color", mode.activeColor);
        this.setStyle("transition", "border-bottom-width .2s");

        mode.onActive.subscribe(() => {
            this.setStyle("border-bottom-width", "4px")
        });

        mode.onBlur.subscribe(() => {
            this.setStyle("border-bottom-width", "0px")
        });

        this.element.addEventListener("click", () => this.mode.switch());
    }
}