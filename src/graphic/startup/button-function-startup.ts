import {ButtonSymbol} from "../button-symbol";
import {List} from "@everest/collections";
import {SymbolContainer} from "../../symbol-container";
import {ModeConfig} from "../mode/mode-config";
import {SymbolMode} from "../symbol-mode";
import {ModeContext} from "../mode/mode-context";
import {ButtonSymbolLoaderError, ElementNotFoundError} from "../../error";
import {SymbolButtonLoader} from "./symbol-button-loader";
import {ViewItem} from "../../view-item";

export class ButtonFunctionStartup {
    private static sndMode = ModeConfig.SND_MODE_NAME;
    private static hypMode = ModeConfig.HYP_MODE_NAME;
    private static sndHypMode = ModeConfig.SND_HYP_MODE_NAME;

    constructor(private symbols: SymbolContainer, private modeContext: ModeContext) {}

    public loadFunctionsButtons(){
        let functionButtons = new List<ButtonSymbol>();
        let buttons = document.querySelectorAll('[data-cal-func]');

       buttons.forEach(button => {

           let buttonSymbols = new SymbolButtonLoader(<HTMLElement>button, this.modeContext, this.symbols,
               [ModeConfig.SND_MODE_NAME, ModeConfig.HYP_MODE_NAME,ModeConfig.SND_HYP_MODE_NAME]);

           let functionButton = new ButtonSymbol(<HTMLElement>button, buttonSymbols.getPrimarySymbol(), buttonSymbols.loadSymbols());

           functionButtons.add(functionButton);
       });

       return functionButtons;
    }

}