import { CalculatorInput } from "./calculator.input";
import {  TRIGONOMETRY_MODE} from "./graphic/mode/mode";
import { CalculatorKeyboard } from "./calculator.keyboard";
import { ModeInit } from "./graphic/mode/mode-init";
import { FunctionButtons } from "./button/function.buttons";
import { ActiveModeIndicatorBuilder } from "./button/active.mode.indicator.builder";

export class Calculator{
    functions: Function[] = [];

    inputField:CalculatorInput;

    modes: ModeInit;

    keybord: CalculatorKeyboard;

    functionsButtons: FunctionButtons;

    activeModeIndicatorBuilder: ActiveModeIndicatorBuilder;
    
    initialize(){
        this.inputField = new CalculatorInput();
        this.modes = new ModeInit();
        this.activeModeIndicatorBuilder = new ActiveModeIndicatorBuilder();

        this.keybord = new CalculatorKeyboard(this.modes);
        this.keybord.initialize();

        this.functionsButtons = new FunctionButtons(this.activeModeIndicatorBuilder, this.modes);
    }

}

