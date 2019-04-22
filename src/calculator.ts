import { CalculatorInput } from "./calculator.input";
import { ModeConfig } from "./graphic/mode/mode-config";

export class Calculator{
    functions: Function[] = [];

    inputField:CalculatorInput;

    modes: ModeConfig;

    
    initialize(){
        this.inputField = new CalculatorInput();
        this.modes = new ModeConfig();
    }

}

