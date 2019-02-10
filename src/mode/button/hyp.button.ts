import { ModeButton } from "./mode.button";
import { SingleMode } from "../single.mode";

export class HypButton extends ModeButton{
    constructor(public mode: SingleMode, public element: HTMLElement){
        super(mode, element);
        
    }
}