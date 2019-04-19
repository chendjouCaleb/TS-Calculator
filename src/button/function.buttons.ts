import { FunctionButton } from "./function.button";
import { ModeInit } from "../graphic/mode/mode-init";
import { ModeFunction } from "../graphic/mode/mode.function";
import { ActiveModeIndicatorBuilder } from "./active.mode.indicator.builder";

export class FunctionButtons {
    buttons: FunctionButton[] = [];

    constructor(private modeIndicatorBuilder: ActiveModeIndicatorBuilder, modes: ModeInit){
        this.buttons = [

            new FunctionButton(document.querySelector("[cal-op-square]"), this.modeIndicatorBuilder, "x²",
                [new ModeFunction(modes.sndMode, "cos⁻¹")]
            ),


            new FunctionButton(document.querySelector("[cal-func-cos]"), this.modeIndicatorBuilder, "cos",
                [
                    new ModeFunction(modes.sndMode, "cos⁻¹"), 
                    new ModeFunction(modes.hypMode, "cosh"),
                    new ModeFunction(modes.radMode, "cosr"),
                    new ModeFunction(modes.sndHypMode, "cosh⁻¹"),
                    new ModeFunction(modes.sndRadMode, "cosr⁻¹"),
                    new ModeFunction(modes.sndHypRadMode, "coshr⁻¹"),
                ]
            ),
            

            new FunctionButton(document.querySelector("[cal-func-sin]"), this.modeIndicatorBuilder, "sin", 
                [
                    new ModeFunction(modes.sndMode, "sin⁻¹"), 
                    new ModeFunction(modes.hypMode, "sinh"),
                    new ModeFunction(modes.radMode, "sinr"),
                    new ModeFunction(modes.radHypMode, "sinhr"),
                    new ModeFunction(modes.sndHypMode, "sinh⁻¹"),
                    new ModeFunction(modes.sndRadMode, "sinr⁻¹"),
                    new ModeFunction(modes.sndHypRadMode, "sinhr⁻¹"),
                ]
            ),

             new FunctionButton(document.querySelector("[cal-func-tan]"), this.modeIndicatorBuilder, "tan", 
                [
                    new ModeFunction(modes.sndMode, "tan⁻¹"), 
                    new ModeFunction(modes.hypMode, "tanh"),
                    new ModeFunction(modes.sndHypMode, "tanh⁻¹")
                ]
            ),
        ]
    }
}