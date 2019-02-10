import { Mode } from "./mode";

export class SingleMode extends Mode{
    activeIndicator: HTMLSpanElement;

    constructor(protected _isActive=false, public name: string, public activeColor="#3399FF"){
        super(name)
        this.setHTML();
    }

    setHTML(){
        this.activeIndicator = document.createElement("span");
        //this.HTML.innerText = this.name;
        this.activeIndicator.style.color = this.activeColor;
        this.activeIndicator.style.backgroundColor = this.activeColor;
        this.activeIndicator.className = "cal-btn-mode-item";
    }

    switch(){
        if(this._isActive){
            this.blur();
        }else{
            this.active();
        }
    }
}
