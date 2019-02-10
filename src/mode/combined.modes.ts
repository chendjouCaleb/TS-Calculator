import { Mode } from "./mode";

export class CombinedMode extends Mode {
    constructor(public name: string, public combinedModes: Mode[] = []){
        super(name);

        combinedModes.forEach(mode => {
            mode.onActive.subscribe(() => {
                if(this.combinedSubjectsIsActive()){
                    if(!this._isActive){
                        this.active();
                        console.log("I'm active " + this.name)
                    }
                    
                }
            });


            mode.onBlur.subscribe(() => {
                if(this._isActive){
                    this.blur();
                }
            })
        })
    }

    
    combinedSubjectsIsActive(){
        if(!this.combinedModes || this.combinedModes.length == 0 ){
            return false;
        }

        let isActive = true;

        this.combinedModes.forEach(mode => {
            if(!mode.isActive()){
                isActive = false;
            }
        });

        return isActive;
    }
}