/**
 * Represente la partie du clavier qui contiendra les buttons de manipulation des modes.
 * @version 1
 * @author Chendjou deGrace
 * @since 20-04-2019
 */
import {List} from "@everest/collections";
import {SingleModeButton} from "./single-mode-button";
import {ViewItem} from "../view-item";

export class GrahicModeKeyboard extends ViewItem{
    constructor(public element: HTMLElement, buttons: List<SingleModeButton>) {
        super(element);
    }
}