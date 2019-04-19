import {SingleMode} from "../../../src/graphic/mode/single-mode";
import {CombinedMode} from "../../../src/graphic/mode/combined-mode";

test("construct combined mode", () => {
    let hypMode = new SingleMode("hyp");
    let sndMode = new SingleMode("snd");

    let combinedMode = new CombinedMode("sndHyp", [sndMode, hypMode]);

    expect(combinedMode.isActive).toBeFalsy();

    //Single mode.OnActive has 2 observers has startup. One of single mode constructor,
    // another added by combinedMode constructor
    expect(sndMode.onActive.observers.length).toBe(2);
    expect(hypMode.onActive.observers.length).toBe(2);

    expect(sndMode.onBlur.observers.length).toBe(1);
    expect(hypMode.onBlur.observers.length).toBe(1);
});

test("construct combined mode with active single modes", () => {
    let hypMode = new SingleMode("hyp", "#FFF", true);
    let sndMode = new SingleMode("snd", "#EEE", true);

    let combinedMode = new CombinedMode("sndHyp", [sndMode, hypMode]);

    expect(combinedMode.isActive).toBeTruthy();
});

test("blur one single mode of combined mode", () => {
    let hypMode = new SingleMode("hyp", "#FFF", true);
    let sndMode = new SingleMode("snd", "#EEE", true);

    let combinedMode = new CombinedMode("sndHyp", [sndMode, hypMode]);
    expect(combinedMode.isActive).toBeTruthy();

    sndMode.blur();

    expect(combinedMode.isActive).toBeFalsy();
});


test("active one single mode of combined mode", () => {
    let hypMode = new SingleMode("hyp",);
    let sndMode = new SingleMode("snd" );

    let combinedMode = new CombinedMode("sndHyp", [sndMode, hypMode]);
    expect(combinedMode.isActive).toBeFalsy();

    sndMode.active();

    expect(combinedMode.isActive).toBeFalsy();
});

test("active all single mode of combined mode", () => {
    let hypMode = new SingleMode("hyp",);
    let sndMode = new SingleMode("snd" );

    let combinedMode = new CombinedMode("sndHyp", [sndMode, hypMode]);
    expect(combinedMode.isActive).toBeFalsy();

    sndMode.active();
    hypMode.active();

    expect(combinedMode.isActive).toBeTruthy();
});