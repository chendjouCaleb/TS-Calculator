import { SingleMode } from "./single-mode";
import { CombinedMode } from "./combined-mode";
import {ModeContext} from "./mode-context";

export class ModeInit {

    public init() {
        let sndSingleMode = new SingleMode("snd", "#E8AE0C");
        let hypSingleMode = new SingleMode("hyp", "#E80C7A");

        let sndMode = new CombinedMode("snd", [sndSingleMode]);
        let hypMode = new CombinedMode("hyp", [hypSingleMode]);
        let sndHypMode= new CombinedMode("sndHyp", [hypSingleMode, sndSingleMode]);

        let modeContext = new ModeContext();

        modeContext.addSingleMode(sndSingleMode);
        modeContext.addSingleMode(hypSingleMode);

        modeContext.addCombinedMode(sndMode);
        modeContext.addCombinedMode(hypMode);
        modeContext.addCombinedMode(sndHypMode);

    }
}