import { CalculatorInput } from "./calculator.input";
import {  TRIGONOMETRY_MODE} from "./mode/mode";
import { CalculatorKeyboard } from "./calculator.keyboard";
import { Modes } from "./mode/modes";
import { FunctionButtons } from "./button/function.buttons";

export class Calculator{
    functions: Function[] = [];

    inputField:CalculatorInput;

    modes: Modes; 

    keybord: CalculatorKeyboard;

    functionsButtons: FunctionButtons;
    
    initialize(){
        this.inputField = new CalculatorInput();
        this.modes = new Modes();

        this.keybord = new CalculatorKeyboard(this.modes);
        this.keybord.initialize();

        this.functionsButtons = new FunctionButtons(this.modes);
    }

}

