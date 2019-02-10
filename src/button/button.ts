import { ReplaySubject } from "rxjs";
import { Modes } from "../mode/modes";
import { SingleMode } from "../mode/single.mode";

export abstract class Button{
    onClick = new ReplaySubject();

    constructor(public element: HTMLButtonElement){
        this.element.addEventListener("click", e => this.onClick.next(e));
        this.init();
        this.render();
    }

    public abstract init(): any;
    public abstract render(): any;

}

        

export class OperatorButton extends Button{

    init(){

    }

    render(){
    }
}