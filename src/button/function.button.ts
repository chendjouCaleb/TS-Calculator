import { Button } from "./button";
import { SingleMode } from "../mode/single.mode";
import { Modes } from "../mode/modes";
import { SingleModeFunction, CombinedModeFunction, ModeFunction } from "../mode/mode.function";
import { Mode } from "../mode/mode";

/**
 * @author Chendjou Fotsing Caleb
 * A class that handle graphical buttons
 */
export class FunctionButton extends Button{
    
    activeFunction: string;
    
    activeModes: SingleMode[] = [];
    modeFunctions: ModeFunction[] = [];
    text: string;

    /**
     * HTML element that contains HTML modes indicators
     */
    activeModesIndicatorHTML: HTMLSpanElement;

    /**
     * 
     * @param element HTML element that lie button to the real HTML button
     * @param modes A calculatorModes that have function in the button
     */
    constructor(public element: HTMLButtonElement, public primaryFunc: string, public modes: Modes,
        public singleModeFunctions: SingleModeFunction[], public combinedModeFunctions?: CombinedModeFunction[]){
        super(element);
        this.modeFunctions = this.modeFunctions.concat(singleModeFunctions);
        this.modeFunctions = this.modeFunctions.concat(this.combinedModeFunctions)

        this.activeFunction = primaryFunc;

        this.singleModeFunctions.forEach(modeFunction => {
            modeFunction.mode.onActive.subscribe(() => {
                this.activeModes.push(modeFunction.mode);
                this.updateModeHTML();
                this.render();
            });
            modeFunction.mode.onBlur.subscribe(() => {
                //this.activeFunction = this.primaryFunc;
                this.activeModes = this.activeModes.filter(mode => mode != modeFunction.mode);
                this.updateModeHTML();
                this.render();
            });
        });

        this.modes.superModeOnChange.subscribe(mode => {
            if(!mode){
                this.activeFunction = this.primaryFunc;
            }else if(this.getFunctionMode(this.modes.superMode)){
                this.activeFunction = this.getFunctionMode(this.modes.superMode).func
            }else{
                this.activeFunction = this.primaryFunc;
            }
            this.render();
        })

        this.setActiveModesIndicatorHTML();
      
        this.render();
    }

    getFunctionMode(mode: Mode){
        return this.modeFunctions.filter(fm => fm.mode === mode)[0];
    }

    setActiveFunction(mode: Mode){
        if(mode == null){
            this.activeFunction = this.primaryFunc;
        }else{
            let activeMode = this.modes.activeCombinedMode();
            //console.log(activeMode)
            if(activeMode){
                this.activeFunction = this.getFunctionMode(activeMode).func;
            }else{
                this.activeFunction = this.getFunctionMode(mode).func;
            }
        }
        //console.log(this.activeFunction)
    }


    setActiveModesIndicatorHTML(){
        let modesHTML = document.createElement("span");
        modesHTML.className = "cal-btn-mode";
        this.element.style.position = "relative";
        this.activeModesIndicatorHTML = modesHTML;
        this.element.appendChild(this.activeModesIndicatorHTML);
        this.activeModesIndicatorHTML.innerHTML = ""
    }
    updateModeHTML(){
        this.activeModesIndicatorHTML.innerHTML = "";
        this.activeModes.forEach(m => {
            if(m.isActive()){
                this.activeModesIndicatorHTML.appendChild(m.activeIndicator.cloneNode(true));
            }
        })
    }

    init(){
    }

    render(){
        this.element.innerText = this.activeFunction;
        if(this.activeModesIndicatorHTML){
            //console.log(this.modesHTML)
            this.element.appendChild(this.activeModesIndicatorHTML);
        } 
    }
}