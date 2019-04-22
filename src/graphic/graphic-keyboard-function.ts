
import {List} from "@everest/collections";
import {ButtonSymbol} from "./button-symbol";
import {ViewItem} from "../view-item";

/**
 * Represente la clavier contenant les button de fonction.
 * @version 1
 * @author Chendjou deGrace
 * @since 20-04-2019
 */
export class GraphicKeyboardFunction extends ViewItem{
    constructor(public element: HTMLElement, buttons: List<ButtonSymbol>) {
        super(element);
    }
}