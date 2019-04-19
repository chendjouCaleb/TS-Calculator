import {SingleMode} from "../../../src/graphic/mode/single-mode";

test("construct single mode", () => {
    let mode = new SingleMode("rad", "#999",true);

    expect(mode.isActive).toBeTruthy();
    expect("rad").toBe(mode.name);
    expect("#999").toBe(mode.activeColor);
});

test("active single mode", () => {
    let mode = new SingleMode("rad", "#999");
    let indicator = false;
    mode.onActive.subscribe(() => indicator = true);

    mode.active();
    expect(mode.isActive).toBeTruthy();
    expect(indicator).toBeTruthy();
});


test("blur single mode", () => {
    let mode = new SingleMode("rad","#999", true );
    let indicator = true;
    mode.onBlur.subscribe(() => indicator = false);

    mode.blur();
    expect(mode.isActive).toBeFalsy();
    expect(indicator).toBeFalsy();
});