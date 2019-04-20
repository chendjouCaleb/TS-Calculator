import {GraphicInput} from "./graphic-input";
import {ViewItem} from "../view-item";

/**
 * Represente la vue HTML qui va afficher les résultat d'évaluation d'expression.
 * @version 1
 * @author Chendjou deGrace
 * @since 19-04-2019
 */
export class GraphicResult extends ViewItem{
    constructor(public element: HTMLElement, private graphicInput: GraphicInput) {
        super(element);
    }
}