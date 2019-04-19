import { ActiveModeIndicator } from "./active.mode.indicator";
import { SingleMode } from "../graphic/mode/single-mode";

export class ActiveModeIndicatorBuilder{
    build(mode: SingleMode): ActiveModeIndicator{
        let indicatorHTML = document.createElement("span");
        //this.HTML.innerText = this.name;
        indicatorHTML.style.color = mode.activeColor;
        indicatorHTML.style.backgroundColor = mode.activeColor;
        indicatorHTML.style.transitionDuration = ".3s";
        indicatorHTML.className = "cal-btn-mode-item";
        indicatorHTML.innerHTML = "";

        let modeIndicator = new ActiveModeIndicator(indicatorHTML, mode);
        modeIndicator.hide();
        
        return modeIndicator;
    }
}