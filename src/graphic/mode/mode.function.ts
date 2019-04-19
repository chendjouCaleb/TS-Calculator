import { SingleMode } from "./single-mode";
import { CombinedMode } from "./combined-mode";
import { Mode } from "./mode";

/**
 * A class that lies a composed mode with one function
 */
export class ModeFunction{
    constructor(public mode: CombinedMode, public func: string){
        
    }
}