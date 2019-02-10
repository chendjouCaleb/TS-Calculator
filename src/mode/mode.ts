import { Subject, ReplaySubject } from "rxjs";

export enum TRIGONOMETRY_MODE { RADIAN, DEGRES }
export enum KEYBOARD_DOMAIN_MODE { CALCULUS, STATS }

export class Mode{
    onActive:ReplaySubject<any>;
    onBlur: ReplaySubject<any>;
    incompatibleModes: Mode[] = [];
    protected _isActive = false;

    constructor(public name: string){ 
        this.onActive = new ReplaySubject();
        this.onBlur = new ReplaySubject();

        this.onActive.subscribe(e => {
            this.incompatibleModes.forEach(m => m.blur());
        });
    }

    isActive() {return  this._isActive; }

    blur(){
        this._isActive = false;
        this.onBlur.next();
    }

    active(){
        this._isActive= true;
        this.onActive.next();
    }
}