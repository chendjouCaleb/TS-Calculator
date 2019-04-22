import {ModeContext} from "../mode/mode-context";
import {SymbolContainer} from "../../symbol-container";
import {List} from "@everest/collections";
import {SymbolMode} from "../symbol-mode";
import {ButtonSymbolLoaderError} from "../../error";
import  { Symbol } from "../../symbols";

export class SymbolButtonLoader {
    constructor(private element: HTMLElement, private modeContext: ModeContext,
                private symbols: SymbolContainer, private modes: string[]) {

        if(!element.hasAttribute('data-cal-func-norm')){
            throw new ButtonSymbolLoaderError(`L'élement ${this.element} doit avoir les attribut [data-cal-func-norm] 
            qui renseigne sa fonction primaire.`);
        }
    }

    loadSymbols():List<SymbolMode>{
        let symbolModes = new List<SymbolMode>();

        for (let mode of this.modes){
            console.log(`data-cal-func-${mode}`);
            if(this.element.hasAttribute(`data-cal-func-${mode}`)){
                symbolModes.add(this.loadSymbol(mode));
            }

        }
        console.log(symbolModes.toArray());
        return symbolModes;
    }

    getPrimarySymbol(): Symbol{
        let symbolName = this.element.getAttribute(`data-cal-func-norm`);
        if(symbolName != null && symbolName.length < 1){
            throw new ButtonSymbolLoaderError(`Le symbole ${name} n'existe pas pour l'élement ${this.element}`)
        }

        return this.symbols.get(symbolName);
    }

    loadSymbol(name: string): SymbolMode | null {
        let symbolName = this.element.getAttribute(`data-cal-func-${name}`);
        if(symbolName != null && symbolName.length < 1){
            throw new ButtonSymbolLoaderError(`Le symbole ${name} n'existe pas pour l'élement ${this.element}`)
        }


            return new SymbolMode(this.modeContext.getCombinedMode(name), this.symbols.get(symbolName));

    }

}