import {ViewItem} from "../src/view-item";
import "jest-dom/extend-expect";

test("create view item", () => {
    document.body.innerHTML = "<span>Simple html element</span>";

    let viewItem = new ViewItem(document.querySelector("span"));

    expect(viewItem.element.textContent).toBe("Simple html element")
});

test("add class", () => {
    document.body.innerHTML = "<span>Simple html element</span>";
    let viewItem = ViewItem.bind("span");
    viewItem.addClass("class-1");

    expect(document.querySelector("span")).toHaveClass("class-1")
});

test( "remove class", () => {
    document.body.innerHTML = "<span>Simple html element</span>";
    let span = document.querySelector("span");
    let viewItem = new ViewItem(span);
    viewItem.addClass("class-1");
    viewItem.addClass("class-2");

    viewItem.removeClass("class-2");

    expect(span.classList.length).toBe(1);
    expect(span.classList.contains("class-2")).toBeFalsy();
});


test( "toggle class", () => {
    document.body.innerHTML = "<span>Simple html element</span>";
    let span = document.querySelector("span");
    let viewItem = new ViewItem(span);
    viewItem.toggleClass("class-1");

    expect(span.classList.contains("class-1")).toBeTruthy();

    viewItem.toggleClass("class-1");
    expect(span.classList.contains("class-1")).toBeFalsy();
});


test( "has class", () => {
    document.body.innerHTML = "<span class='class-1'>Simple html element</span>";
    let span = document.querySelector("span");
    let viewItem = new ViewItem(span);

    expect(viewItem.hasClass("class-1")).toBeTruthy()
});


test( "set style property", () => {
    document.body.innerHTML = "<span class='class-1'>Simple html element</span>";
    let span = <HTMLElement>document.querySelector("span");
    let viewItem = new ViewItem(span);

    viewItem.setStyle("border-color", "#EEE");

    expect(span).toHaveStyle("border-color:#EEE")
});

test( "get style property", () => {
    document.body.innerHTML = "<style>span{color:rgb(51, 153, 255); text-transform: uppercase;}</style><span class='class-1'>Simple html element</span>";
    let span = <HTMLElement>document.querySelector("span");
    let viewItem = new ViewItem(span);

    expect(viewItem.getStyle("color")).toBe("rgb(51, 153, 255)");
    expect(viewItem.getStyle("text-transform")).toBe("uppercase")
});

test( "get text content", () => {
    document.body.innerHTML = "<span class='class-1'>Simple html element</span>";
    let span = <HTMLElement>document.querySelector("span");
    let viewItem = new ViewItem(span);

    expect(viewItem.textContent).toBe("Simple html element");
});

test( "set text content", () => {
    document.body.innerHTML = "<span class='class-1'>Simple html element</span>";
    let span = <HTMLElement>document.querySelector("span");
    let viewItem = new ViewItem(span);
    viewItem.textContent = "new text";

    expect(span).toHaveTextContent("new text");
});