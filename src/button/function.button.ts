import { Button } from "./button";
import { SingleMode } from "../graphic/mode/single-mode";
import { ModeInit } from "../graphic/mode/mode-init";
import { ModeFunction } from "../graphic/mode/mode.function";
import { Mode } from "../graphic/mode/mode";
import { ArrayUtils } from "../array.utils";
import { ActiveModeIndicator } from "./active.mode.indicator";
import { ActiveModeIndicatorBuilder } from "./active.mode.indicator.builder";

/**
 * @author Chendjou Fotsing Caleb
 * A class that handle graphical buttons
 */
export class FunctionButton extends Button{
    
    activeFunction: string;
    activeModeFunction: ModeFunction;
    activeModeFunctions: ModeFunction[] = [];

    /**
     * 
     * @param view HTML element that lie button to the real HTML button
     * @param modes A calculatorModes that have function in the button
     */
    constructor(public view: HTMLButtonElement, protected modeIndicatorBuilder:  ActiveModeIndicatorBuilder, public primaryFunc: string,
         public modeFunctions: ModeFunction[]
        ){
        super(view, modeIndicatorBuilder);

        this.view.style.position = "relative";

        this.setSingleModes();

        this.initActiveModeIndicatorContainer();
        this.initButtonTextContainer();
        this.setActiveModeIndicators();
        this.appendActiveModeIndicatorView();

        //console.log(this.singleModes);

        this.activeFunction = primaryFunc;

        this.attachSingleModeEvent();
        this.attachModeFunctionEvent();
        this.updateViewText();
    }

    getFunctionMode(mode: Mode){
        return this.modeFunctions.filter(fm => fm.mode === mode)[0];
    }

    getActiveModeFunction(): ModeFunction{
        if(this.activeModeFunctions.length == 0){
            return null;
        }
        let modeFunction = this.activeModeFunctions[0];
        this.activeModeFunctions.forEach(mf => {
            if(mf.mode.singlesModes.length > modeFunction.mode.singlesModes.length ){
                modeFunction = mf;
            }
        });
        
        return modeFunction;
    }

    setActiveFunction(){
        if(!this.activeModeFunction){
            this.activeFunction = this.primaryFunc;
        }else{
           this.activeFunction = this.activeModeFunction.func;
        }
    }


    attachSingleModeEvent(){
        this.singleModes.forEach(mode => {
            mode.onActive.subscribe(() => {
                this.activeSingleModes.push(mode);
                this.updateViewText();
            });
            mode.onBlur.subscribe(() => {
                this.activeSingleModes =  ArrayUtils.remove(this.activeSingleModes, mode);
                this.updateViewText();
            });
        });
    }

    attachModeFunctionEvent(){
        this.modeFunctions.forEach(modeFunction => {
            modeFunction.mode.onActive.subscribe(() => {
                this.activeModeFunctions.push(modeFunction);
                this.activeModeFunction = this.getActiveModeFunction();
                this.setActiveFunction();
                this.updateViewText();
            });

            modeFunction.mode.onBlur.subscribe(() => {
                this.activeModeFunctions = ArrayUtils.remove(this.activeModeFunctions, modeFunction);
                this.activeModeFunction = this.getActiveModeFunction();
                this.setActiveFunction();
                this.updateViewText();
            })
        })
    }

    setSingleModes(){
        this.modeFunctions.forEach(mf => {
            mf.mode.singlesModes.forEach(mode => {
                if(!ArrayUtils.contains(this.singleModes, mode)){
                    this.singleModes.push(mode);
                }
            });
        });
    }
    


    updateViewText(){
        this.buttonTextContainer.innerText = this.activeFunction; 
    }
}