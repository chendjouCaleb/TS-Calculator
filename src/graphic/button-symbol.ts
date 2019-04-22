import {ViewItem} from "../view-item";
import {List} from "@everest/collections";
import {getTopMode, SymbolMode} from "./symbol-mode";
import { Symbol } from "../symbols";
import {CombinedMode} from "./mode/combined-mode";

/**
 * Represente un button faisant appel à une fonction de la calculatrice.
 * @version 1
 * @author Chendjou deGrace
 * @since 21-04-2019
 */
export class ButtonSymbol extends ViewItem {
    private _activeSymbol:Symbol;
    private activeSymbols = new List<CombinedMode>();
    constructor(element: HTMLElement, primarySymbol: Symbol, symbolModes: List<SymbolMode> = new List()) {
        super(element);
        this.activeSymbol = primarySymbol;

        symbolModes.convertAll(t => t.mode).forEach(mode => {
            mode.onActive.subscribe(() => {
                // let topSymbol = getTopMode(symbolModes);
                // this.activeSymbol = topSymbol.mode;
                this.activeSymbols.insert(0, mode);
                console.log(this.activeSymbols.toArray());

                this.activeSymbol = symbolModes.find(t => t.mode == this.activeSymbols.get(0)).symbol;
            });

            mode.onBlur.subscribe(() => {
                this.activeSymbols.remove(mode);

                console.log(this.activeSymbols.toArray());
                if(this.activeSymbols.size == 0){
                    this.activeSymbol = primarySymbol;
                }else{
                    this.activeSymbol = symbolModes.find(t => t.mode == this.activeSymbols.get(0)).symbol;
                }
            })
        })

    }

    set activeSymbol(symbol: Symbol) {
        this._activeSymbol = symbol;
        this.textContent = symbol.name;
    }

    get activeSymbol() {
        return this._activeSymbol;
    }


}