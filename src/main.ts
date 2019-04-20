import {GraphicContext} from "./graphic/graphic-context";
import {ViewItem} from "./view-item";
import {ModeConfig} from "./graphic/mode/mode-config";
import {SingleModeButton} from "./graphic/single-mode-button";
import {GraphicInput} from "./graphic/graphic-input";
import {GraphicResult} from "./graphic/graphic-result";
import {GraphicView} from "./graphic/graphic-view";
import {GraphicKeyboard} from "./graphic/graphic-keyboard";
import {GraphicKeyboardMode} from "./graphic/graphic-keyboard-mode";
import {List} from "@everest/collections";
import {GraphicKeyboardMemory} from "./graphic/graphic-keyboard-memory";
import {GraphicKeyboardFunction} from "./graphic/graphic-keyboard-function";
import {FunctionButton} from "./graphic/function-button";

let graphicViewElement = <HTMLElement>document.querySelector("#graphic-view");
let input = document.getElementById("calculator-input-field");
let resultDiv = document.getElementById("result");
let error = document.getElementById("error");



let graphicInput = new GraphicInput(input);
let graphicResult = new GraphicResult(resultDiv, graphicInput);


let modeContext = ModeConfig.createContext();

let sndModeButton = new SingleModeButton(modeContext.getSingleMode(ModeConfig.SND_MODE_NAME),
    <HTMLElement> document.querySelector("[data-cal-mode='snd']"));

let hypModeButton = new SingleModeButton(modeContext.getSingleMode(ModeConfig.HYP_MODE_NAME),
    <HTMLElement> document.querySelector("[data-cal-mode='hyp']"));

let statModeButton = new SingleModeButton(modeContext.getSingleMode(ModeConfig.STA_MODE_NAME),
    <HTMLElement> document.querySelector("[data-cal-mode='sta']"));

let modeButtons = List.fromArray([sndModeButton, hypModeButton, statModeButton]);
let graphicKeyBoardMode = new GraphicKeyboardMode(document.getElementById("graphic-keyboard-mode"), modeButtons);

let memoryKeyboard = new GraphicKeyboardMemory(document.getElementById("graphic-keyboard-memory"));

let functionButtons = new List<FunctionButton>();
let functionKeyboard = new GraphicKeyboardFunction(document.getElementById("graphic-keyboard-function"), functionButtons);
let graphicKeyboard = new GraphicKeyboard(document.getElementById("graphic-keyboard"), graphicKeyBoardMode, memoryKeyboard, functionKeyboard);

let graphicView = new GraphicView(graphicViewElement, graphicInput, graphicResult, graphicKeyboard);
let graphicContext = new GraphicContext(modeContext, graphicView);

