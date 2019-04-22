import {CombinedMode} from "./mode/combined-mode";
import {Symbol} from "../symbols";
import {List} from "@everest/collections";

/**
 * Classe de liaison entre un symbole et un mode.
 * Celà permet d'ajouter des symbole ainsi que le mode sur lequel ce symbole sera actif.
 * @version 1
 * @author Chendjou deGrace
 * @since 19-04-2019
 */


export class SymbolMode {

    /**
     * Création d'une liaison.
     * @param mode Le mode pour lequel le symbole sera utilisable.
     * @param symbol Le symbole de la liaison.
     */
    constructor(public mode: CombinedMode, public symbol: Symbol){}
}

export function getTopMode(symbols: List<SymbolMode>) : SymbolMode{
    if(symbols.size == 0){
        return null;
    }

    let top = symbols.get(0);
    for(let symbol of symbols){
        if(symbol.mode.singlesModes.length > top.mode.singlesModes.length){
            top = symbol;
        }
    }
    return top;

}