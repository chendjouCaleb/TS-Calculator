import { SingleMode } from "../graphic/mode/single-mode";

export class ActiveModeIndicator {
    

    constructor(private _view: HTMLSpanElement, private mode: SingleMode) {
        this.mode.onActive.subscribe(() => this.show());
        this.mode.onBlur.subscribe(() => this.hide());
    }

    show(): void {
        this._view.style.backgroundColor = this.mode.activeColor;
    }

    hide(): void {
        this._view.style.backgroundColor = "transparent";
    }

    get view(){
        return this._view;
    }
}
