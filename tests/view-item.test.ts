import {ViewItem} from "../src/view-item";

test("create view item", () => {
    document.body.innerHTML = "<span>Simple html element</span>";

    let viewItem = new ViewItem(document.querySelector("span"));

    expect(viewItem.element.innerText).toBe("Simple html element")
});