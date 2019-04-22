
import {ModeContext} from "./mode/mode-context";
import {GraphicView} from "./graphic-view";

/**
 * Represente le contexte de la partie graphique.
 * @version 1
 * @author Chendjou deGrace
 * @since 19-04-2019
 */
export class GraphicContext {
    constructor(public modeContext:ModeContext, public view: GraphicView){}
}