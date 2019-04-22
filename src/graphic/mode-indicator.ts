/**
 * Element permettant d'indiquer qu'un mode est activé pour un bouton.
 * @version 1
 * @author Chendjou deGrace
 * @since 21-04-2019
 */
import {ViewItem} from "../view-item";
import {SingleMode} from "./mode/single-mode";

export class ModeIndicator extends ViewItem{
    constructor(mode: SingleMode) {
        let indicatorHTML = document.createElement("span");
        //this.HTML.innerText = this.name;
        indicatorHTML.style.color = mode.activeColor;
        indicatorHTML.style.backgroundColor = mode.activeColor;
        indicatorHTML.style.transitionDuration = ".3s";
        indicatorHTML.className = "cal-btn-mode-item";
        indicatorHTML.innerHTML = "";

        super(indicatorHTML)
    }
}