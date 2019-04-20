import {GraphicContext} from "./graphic/graphic-context";
import {ViewItem} from "./view-item";
import {ModeConfig} from "./graphic/mode/mode-config";
import {SingleModeButton} from "./graphic/single-mode-button";

let graphicViewElement = <HTMLElement>document.querySelector("#graphic-view");
let input = document.getElementById("calculator-input-field");
let resultDiv = document.getElementById("result");
let error = document.getElementById("error");


let graphicView = new ViewItem(graphicViewElement);

let modeContext = ModeConfig.createContext();

let sndModeButton = new SingleModeButton(modeContext.getSingleMode(ModeConfig.SND_MODE_NAME),
    <HTMLElement> document.querySelector("[data-cal-mode='snd']"));

let hypModeButton = new SingleModeButton(modeContext.getSingleMode(ModeConfig.HYP_MODE_NAME),
    <HTMLElement> document.querySelector("[data-cal-mode='hyp']"));

let statModeButton = new SingleModeButton(modeContext.getSingleMode(ModeConfig.STA_MODE_NAME),
    <HTMLElement> document.querySelector("[data-cal-mode='sta']"));

let graphicContext = new GraphicContext(modeContext, graphicView);

