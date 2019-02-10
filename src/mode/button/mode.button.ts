import { ReplaySubject } from "rxjs";
import { SingleMode } from "../single.mode";

export  class ModeButton {
    onClick = new ReplaySubject();
    /**
     * Permet de lier un élement HTML à un mode singulier de l'application
     * @param mode Mode lié au Button
     * @param element Element HTML qui est liée au button
     */
    constructor(public mode: SingleMode, public element: HTMLElement) {
        this.addDefaultStyle();

        element.addEventListener("click", e => {
            this.onClick.next();
        });

        this.onClick.subscribe(e => this.mode.switch());

        /**
         * Quand le mode liée à ce button est activé, ce button s'active aussi
         */
        this.mode.onActive.subscribe(e => {
            this.active();
        });


        /**
         * Quand le mode liée à ce button est activé, ce button s'active aussi
         */
        this.mode.onBlur.subscribe(e => {
            this.blur();
        })
    }


    /**
     * Style visuel du button HTML
     */
    protected addDefaultStyle(){
        this.element.style.borderBottom = " 0px solid " + this.mode.activeColor;
        this.element.style.transitionDuration = ".1s";
    }

    /**
     * Ajoute les styles indiquants que le bouton est actif
     */
    protected active(){
        this.element.style.borderBottomWidth = "4px";
    }

    /**
     * Annule les styles ajoutés lors de l'activation du bouton
     */
    protected blur(){
        this.element.style.borderBottomWidth = "0px";
    }
}