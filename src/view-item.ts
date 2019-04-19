/**
 * Represents a wrapper for HTMLElement and constitute a base class for calculator View element.
 */
import {Dictionary} from "@everest/collections";

export class ViewItem {


    private tempStyles = new Dictionary<string, string>();

    /**
     * Creates an view item with a HTMLElement.
     * @param element The target HTMLElement.
     */
    constructor(public element?: HTMLElement){
    }


    /**
     * Adds a CSS className to the HTMLElement.
     * @param className The className to add.
     */
    public addClass(className: string){
        this.element.classList.add(className);
    }

    /**
     * Removes a CSS className to the HTMLElement.
     * @param className The className to remove.
     */
    public removeClass(className: string) {
        this.element.classList.remove(className);
    }

    /**
     * Adds a CSS className to the HTMLElement if he don't has it, remove a className in otherwise.
     * @param className The className to add or remove.
     */
    public toggleClass(className: string){
        if(this.element.classList.contains(className)) {
            this.element.classList.remove(className);
        }else {
            this.element.classList.add(className);
        }
    }

    /**
     * Checks if the HTMLElement has a CSS className.
     * @param className The CSS class to find.
     */
    public hasClass(className: string): boolean {
        return this.element.classList.contains(className);
    }

    public setStyle(key: string, value: string){
        this.element.style.setProperty(key, value);
    }

    /**
     * Hide this HTMLElement.
     * It doing it by changing the CSS display style to 'none'.
     * Before the changing of the CSS display style, the old style is saved in _oldDisplayStyle property.
     */
    public hide() {
        this.tempStyles.put("display", this.element.style.display);
        this.element.style.display = 'none'
    }

    /**
     * Hide this HTMLElement.
     * It doing it by changing the CSS display style to 'none'.
     * Before the changing of the CSS display style, the old style is saved in orignalStyles.
     */
    public show() {
        this.element.style.display = this.tempStyles.get("display");
    }

    public setTextContent(text: string){
        this.element.textContent = text;
    }

    public slideUp(time = 100){
        let rate= this
    }
}