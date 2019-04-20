/**
 * Represente la clavier HTML d'une calculatrice.
 * @version 1
 * @author Chendjou deGrace
 * @since 20-04-2019
 */
import {GraphicKeyboardMode} from "./graphic-keyboard-mode";
import {GraphicKeyboardMemory} from "./graphic-keyboard-memory";
import {ViewItem} from "../view-item";
import {GraphicKeyboardFunction} from "./graphic-keyboard-function";

export class GraphicKeyboard extends ViewItem{
    constructor(public element: HTMLElement,
                public modeKeyboard: GraphicKeyboardMode,
                public memoryKeyboard: GraphicKeyboardMemory,
                public functionKeyboard: GraphicKeyboardFunction){
        super(element);
    }
}
