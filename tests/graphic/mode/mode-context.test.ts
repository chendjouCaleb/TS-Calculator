import {ModeContext} from "../../../src/graphic/mode/mode-context";
import {SingleMode} from "../../../src/graphic/mode/single-mode";
import {ElementAlreadyExistsError, ElementNotFoundError} from "../../../src/error";
import {CombinedMode} from "../../../src/graphic/mode/combined-mode";

test("construct mode context", () => {
   let context = new ModeContext();

   expect(context.combinedModes.size).toBe(0);
   expect(context.singleModes.size).toBe(0);
   expect(context.modes.size).toBe(0);
});

test("add single mode", () => {
    let context = new ModeContext();
   let sndMode = new SingleMode("snd");

   context.addSingleMode(sndMode);

    expect(context.combinedModes.size).toBe(0);
    expect(context.singleModes.size).toBe(1);
    expect(context.modes.size).toBe(1);
});

test("try add one single mode two time", () => {
    let context = new ModeContext();
    let sndMode = new SingleMode("snd");

    context.addSingleMode(sndMode);
    context.addSingleMode(sndMode);

    expect(context.combinedModes.size).toBe(0);
    expect(context.singleModes.size).toBe(1);
    expect(context.modes.size).toBe(1);
});


test("try add two single mode with same name", () => {
    let context = new ModeContext();
    let sndMode = new SingleMode("snd");
    let sndMode1 = new SingleMode("snd");

    context.addSingleMode(sndMode);

    expect(() => context.addSingleMode(sndMode1)).toThrow(ElementAlreadyExistsError);

    expect(context.combinedModes.size).toBe(0);
    expect(context.singleModes.size).toBe(1);
    expect(context.modes.size).toBe(1);
});

test("get single mode", () => {
    let context = new ModeContext();
    let sndMode = new SingleMode("snd");

    context.addSingleMode(sndMode);

    expect(context.getSingleMode("snd")).toBe(sndMode);
});

test("try get not found single mode", () => {
    let context = new ModeContext();
    let sndMode = new SingleMode("snd");

    context.addSingleMode(sndMode);

    expect(() => context.getSingleMode("snd1")).toThrow(ElementNotFoundError);
});


test("add combined mode", () => {
    let context = new ModeContext();
    let mode = new CombinedMode("sndOnly", [new SingleMode("snd")]);

    context.addCombinedMode(mode);

    expect(context.combinedModes.size).toBe(1);
    expect(context.singleModes.size).toBe(0);
    expect(context.modes.size).toBe(1);
});


test("try add one combined mode two time", () => {
    let context = new ModeContext();
    let mode = new CombinedMode("sndHyp", [new SingleMode("snd"), new SingleMode("snd") ]);


    context.addCombinedMode(mode);
    context.addCombinedMode(mode);

    expect(context.combinedModes.size).toBe(1);
    expect(context.modes.size).toBe(1);
});

test("try add two combined mode with same name", () => {
    let context = new ModeContext();
    let mode1 = new CombinedMode("sndHyp", [ new SingleMode("snd"), new SingleMode("hyp")]);
    let mode2 = new CombinedMode("sndHyp", [ new SingleMode("snd"), new SingleMode("hyp")]);

    context.addCombinedMode(mode1);

    expect(() => context.addCombinedMode(mode2)).toThrow(ElementAlreadyExistsError);

    expect(context.combinedModes.size).toBe(1);
    expect(context.singleModes.size).toBe(0);
});

test("get combined mode", () => {
    let context = new ModeContext();
    let mode1 = new CombinedMode("sndHyp", [ new SingleMode("snd"), new SingleMode("hyp")]);

    context.addCombinedMode(mode1);

    expect(context.getCombinedMode("sndHyp")).toBe(mode1);
});

test("try get not found combined mode", () => {
    let context = new ModeContext();
    let mode1 = new CombinedMode("sndHyp", [ new SingleMode("snd"), new SingleMode("hyp")]);

    context.addCombinedMode(mode1);

    expect(() => context.getCombinedMode("sndHyp1")).toThrow(ElementNotFoundError);
});
