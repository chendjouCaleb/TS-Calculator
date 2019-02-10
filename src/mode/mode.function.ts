import { SingleMode } from "./single.mode";
import { CombinedMode } from "./combined.modes";
import { Mode } from "./mode";

export class ModeFunction{
    constructor(public mode: Mode, public func: string){ }
}
export class SingleModeFunction extends ModeFunction {
    constructor(public mode: SingleMode, public func: string){
        super(mode, func);
    }
}

export class CombinedModeFunction extends ModeFunction {
    constructor(public mode: CombinedMode, public func: string){
        super(mode, func);
    }
}