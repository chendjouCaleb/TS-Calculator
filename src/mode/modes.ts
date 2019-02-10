import { SingleMode } from "./single.mode";
import { Mode } from "./mode";
import { CombinedMode } from "./combined.modes";
import { Subject, ReplaySubject } from "rxjs";
import { ArrayUtils } from "../array.utils";

export class Modes {
    sndMode = new SingleMode(false, "snd", "#E8AE0C");
    hypMode = new SingleMode(false, "hyp", "#E80C7A");
    radMode = new SingleMode(false, "rad", "#0DFF93");
    statMode = new SingleMode(false, "sta", "#1CC4E8");

    sndHypMode: CombinedMode;
    sndRadMode: CombinedMode;
    radHypMode: CombinedMode;
    sndHypRadMode: CombinedMode;


    modes : Mode[] = [];
    singleModes: SingleMode[] = [];
    combinedModes: CombinedMode[] = [];
    activeCombinedModes: CombinedMode[] = [];
    activeSingleModes: SingleMode[] = [];
    superMode: Mode;
    superModeOnChange = new ReplaySubject();
    

    constructor(){
        this.statMode.incompatibleModes = [this.hypMode, this.radMode];
        this.hypMode.incompatibleModes.push(this.statMode);
        this.radMode.incompatibleModes.push(this.statMode);

        this.sndHypMode = new CombinedMode("sndHyp", [this.hypMode, this.sndMode]);
        this.sndRadMode = new CombinedMode("sndRad", [this.radMode, this.sndMode]);
        this.radHypMode = new CombinedMode("radHyp", [this.hypMode, this.radMode]);
        this.sndHypRadMode = new CombinedMode("sndHypRad", [this.hypMode, this.sndMode, this.radMode]);

        this.singleModes = [this.sndMode, this.statMode, this.radMode, this.hypMode];
        this.combinedModes = [ this.sndHypMode, this.sndRadMode, this.radHypMode, this.sndHypRadMode ];

        this.modes = this.modes.concat(this.singleModes);
        this.modes = this.modes.concat(this.combinedModes);


        this.singleModes.forEach(mode => {
            mode.onActive.subscribe(() => {
                this.activeSingleModes.push(mode);
                this.changeSuperMode();
            });
            mode.onBlur.subscribe(() => {
                this.activeSingleModes = ArrayUtils.remove(this.activeSingleModes, mode);
                this.changeSuperMode();
            })
        });

        this.combinedModes.forEach(mode => {
            mode.onActive.subscribe(() => this.activeCombinedModes.push(mode));
            mode.onBlur.subscribe(() => {
                this.activeCombinedModes = ArrayUtils.remove(this.activeCombinedModes, mode);
                console.log(this.activeCombinedModes)
            })
        });

        

        console.log(this.modes);
    }

    activeCombinedMode(): CombinedMode{
        if(this.activeCombinedModes.length == 0){
            return null;
        }
        let activeCombinedMode = this.activeCombinedModes[0];

        this.activeCombinedModes.forEach(mode => {
            if(mode.combinedModes.length > activeCombinedMode.combinedModes.length){
                activeCombinedMode = mode;
            }
        });

        //this.activeCombinedModes.filter(mode => 
        //    mode.combinedModes.length == Math.max(this.activeCombinedModes.map(mode => mode.combinedModes.length)))
        console.log("activeMode: " + activeCombinedMode.name);
        return activeCombinedMode;
    }

    changeSuperMode(){
        if(this.activeCombinedMode()){
            this.superMode = this.activeCombinedMode();
        }else if(this.activeSingleModes.length > 0){
            this.superMode = this.activeSingleModes[0]
        }else{
            this.superMode = null;
        }

        if(this.superMode)
        console.log("superMode: " + this.superMode.name);
        
        this.superModeOnChange.next(this.superMode);
    }

    
}