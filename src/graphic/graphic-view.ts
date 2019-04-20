import {ViewItem} from "../view-item";
import {GraphicKeyboard} from "./graphic-keyboard";
import {GraphicInput} from "./graphic-input";
import {GraphicResult} from "./graphic-result";

/**
 * Represente la vue HTML de la calculatrice graphique
 * @version 1
 * @author Chendjou deGrace
 * @since 19-04-2019
 */
export class GraphicView extends ViewItem{
    constructor(element: HTMLElement, public input: GraphicInput, public resultView: GraphicResult, public keyboard: GraphicKeyboard){
        super(element);
    }
}