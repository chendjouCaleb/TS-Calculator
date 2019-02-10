import { Button} from "./button/button";
import { Modes } from "./mode/modes";
import { HypButton } from "./mode/button/hyp.button";
import { RadianButton } from "./mode/button/radian.button";
import { SndButton } from "./mode/button/snd.button";
import { StatButton } from "./mode/button/stat.button";
import { ModeButton } from "./mode/button/mode.button";

export class CalculatorKeyboard {
    radiansModeButton = document.querySelector(".radians-mode-button") as HTMLButtonElement;
    hyperbolicModeButton = document.querySelector(".hyperbolic-mode-button") as HTMLButtonElement;
    statisticsModeButton = document.querySelector(".statistics-mode-button") as HTMLButtonElement;
    functionButtons: Button[] = [];
    operatorsButtons = document.querySelectorAll("[cal-op]") as NodeListOf<HTMLButtonElement>;

    modeButtons: ModeButton[] = [];
    constructor(private modes: Modes){
        this.modeButtons = [
            new ModeButton(modes.hypMode, document.querySelector("[cal-hyp-mode]")),
            new ModeButton(modes.radMode, document.querySelector("[cal-rad-mode]")),
            new ModeButton(modes.sndMode, document.querySelector("[cal-snd-mode]")),
            new ModeButton(modes.statMode, document.querySelector("[cal-stat-mode]"))
        ]
    }

    initializeFunctionButton(){
        let htmlButtons = document.querySelectorAll("[cal-func]") as NodeListOf<HTMLButtonElement>;
        htmlButtons.forEach(btn => {
            //let button = new FunctionButton(btn, this.modes);
            //this.functionButtons.push(button);
            //console.log(button);
        })
    }

    initialize() {

        this.initializeFunctionButton();

        this.operatorsButtons.forEach(b => {
            let op = b.getAttribute("cal-op");
            let opVal = b.getAttribute("cal-val");
            
            if(opVal){
                b.innerText = opVal;
            }else{
                b.innerText = op;
            }
        })
    }
    
    

    

}