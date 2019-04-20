import { SingleMode } from "./single-mode";
import { CombinedMode } from "./combined-mode";
import {ModeContext} from "./mode-context";

export class ModeConfig {

    public static SND_MODE_NAME = "snd";
    public static HYP_MODE_NAME = "hyp";
    public static STA_MODE_NAME = "sta";

    public static SND_HYP_MODE_NAME = "sndHyp";
    public static SND_STA_MODE_NAME = "staHyp";

    /**
     * Permet de configurer les modes de clavier de la calculatrice.
     */
    public static createContext(): ModeContext {
        let sndSingleMode = new SingleMode(ModeConfig.SND_MODE_NAME, "#1CC4E8");
        let hypSingleMode = new SingleMode(ModeConfig.HYP_MODE_NAME, "#E80C7A");
        let statSingleMode = new SingleMode(ModeConfig.STA_MODE_NAME, "#e89f06");

        statSingleMode.incompatibleModes = [hypSingleMode];
        hypSingleMode.incompatibleModes = [ statSingleMode ];

        let sndMode = new CombinedMode(ModeConfig.SND_MODE_NAME, [sndSingleMode]);
        let hypMode = new CombinedMode(ModeConfig.HYP_MODE_NAME, [hypSingleMode]);
        let statMode = new CombinedMode(ModeConfig.STA_MODE_NAME, [statSingleMode]);

        let sndHypMode= new CombinedMode(ModeConfig.SND_HYP_MODE_NAME, [hypSingleMode, sndSingleMode]);
        let sndStaMode= new CombinedMode(ModeConfig.SND_STA_MODE_NAME, [statSingleMode, sndSingleMode]);

        let modeContext = new ModeContext();

        modeContext.addSingleMode(statSingleMode);
        modeContext.addSingleMode(sndSingleMode);
        modeContext.addSingleMode(hypSingleMode);

        modeContext.addCombinedMode(sndMode);
        modeContext.addCombinedMode(hypMode);
        modeContext.addCombinedMode(statMode);

        modeContext.addCombinedMode(sndStaMode);
        modeContext.addCombinedMode(sndHypMode);


        return modeContext;
    }


}