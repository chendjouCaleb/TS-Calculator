import { ReplaySubject } from "rxjs";
import { ActiveModeIndicatorBuilder } from "./active.mode.indicator.builder";
import { ActiveModeIndicator } from "./active.mode.indicator";
import { SingleMode } from "../graphic/mode/single-mode";

export abstract class Button{
    onClick = new ReplaySubject();
    activeModeIndicators: ActiveModeIndicator[] = [];
    /**
     * HTML element that contains HTML modes indicators
     */
    activeModesIndicatorContainer: HTMLSpanElement;
    buttonTextContainer: HTMLSpanElement;
    singleModes: SingleMode[] = [];
    activeSingleModes: SingleMode[] = [];
    text: string;

    constructor(public view: HTMLButtonElement, protected modeIndicatorBuilder:  ActiveModeIndicatorBuilder){
        this.view.addEventListener("click", e => this.onClick.next(e));
    }


    initActiveModeIndicatorContainer(){
        this.activeModesIndicatorContainer = document.createElement("span");
        this.activeModesIndicatorContainer.className = "cal-btn-mode";
        this.view.appendChild(this.activeModesIndicatorContainer);
    }

    initButtonTextContainer(){
        let element = document.createElement("span");
        element.style.transitionDuration = ".3";
        element.className = "cal-btn-text";
        this.buttonTextContainer = element;
        this.view.append(element);
    }

    setActiveModeIndicators(){
        this.singleModes.forEach(mode => {
            this.activeModeIndicators.push(this.modeIndicatorBuilder.build(mode));
        });
    }

    appendActiveModeIndicatorView(){
        this.activeModeIndicators.forEach(indicator => 
            this.activeModesIndicatorContainer.appendChild(indicator.view));
    }

}

        

export class OperatorButton extends Button{

    init(){

    }

    render(){
    }
}