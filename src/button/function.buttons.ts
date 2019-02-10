import { FunctionButton } from "./function.button";
import { Modes } from "../mode/modes";
import { SingleModeFunction, CombinedModeFunction } from "../mode/mode.function";

export class FunctionButtons {
    buttons: FunctionButton[] = [];

    constructor(modes: Modes){
        this.buttons = [
            new FunctionButton(document.querySelector("[cal-func-cos]"), "cos", modes,
                [
                    new SingleModeFunction(modes.sndMode, "cos⁻¹"), 
                    new SingleModeFunction(modes.hypMode, "cosh"),
                    new SingleModeFunction(modes.radMode, "cosr")
                ],
                [
                    new CombinedModeFunction(modes.sndHypMode, "cosh⁻¹"),
                    new CombinedModeFunction(modes.sndRadMode, "cosr⁻¹"),
                    new CombinedModeFunction(modes.sndHypRadMode, "coshr⁻¹"),

                ]
            ),
            

            new FunctionButton(document.querySelector("[cal-func-sin]"), "sin", modes, 
                [
                    new SingleModeFunction(modes.sndMode, "sin⁻¹"), 
                    new SingleModeFunction(modes.hypMode, "sinh"),
                    new SingleModeFunction(modes.radMode, "sinr")
                ],
                [
                    new CombinedModeFunction(modes.sndHypMode, "sinh⁻¹"),
                    new CombinedModeFunction(modes.sndRadMode, "sinr⁻¹"),
                    new CombinedModeFunction(modes.sndHypRadMode, "sinhr⁻¹"),
                    
                ]
            ),

             new FunctionButton(document.querySelector("[cal-func-tan]"), "tan", modes, 
                [new SingleModeFunction(modes.sndMode, "tan⁻¹"), new SingleModeFunction(modes.hypMode, "tanh")],
                [new CombinedModeFunction(modes.sndHypMode, "tanh⁻¹")]
            ),
        ]
    }
}