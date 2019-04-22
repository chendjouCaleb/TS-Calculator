import { Mode } from "./mode";
import { SingleMode } from "./single-mode";

/**
 * Représente un mode qui est la combinaise de plusieurs modes singuliers.
 * Ce mode s'active lorsque tous ses modes singuliers sont activés,
 * et se désactive lorsque l'un des ses modes singuliers est désactivé.
 *
 * @version 1
 * @author Chendjou deGrace
 * @since 19-04-2019
 *
 * @see Mode
 * @see SingleMode
 */
export class CombinedMode extends Mode {
    /**
     * 
     * @param name The name of a mode
     * @param singlesModes A list of a single modes that compose the actual mode
     */
    constructor(public name: string, public singlesModes: SingleMode[] = []){
        super(name);
        this._isActive = true;
        
        singlesModes.forEach(mode => {
        if(!mode.isActive){
            this._isActive = false;
        }

        /**
         * When all the subject that compose this mode is activated, this mode is activated automatically
         */
            mode.onActive.subscribe(() => {
                if(this.combinedModesIsActive()){
                    if(!this._isActive){
                        this.active();
                    }
                }
            });

            /**
             * If one of the single mode is deactivated, tis mode is automatically deactivated
             */

            mode.onBlur.subscribe(() => {

                if(this._isActive){
                    this.blur();
                }
            })
        })
    }


    /**
     * Checks that all single mode that compose this mode is actives
     */
    combinedModesIsActive(){
        if(!this.singlesModes || this.singlesModes.length == 0 ){
            return false;
        }

        for (let mode of this.singlesModes) {
            if(!mode.isActive){
                return false;
            }
        }

        return true;
    }

    /**
     * Permet de désactiver ce mode.
     * L'évènement {@field onBlur} est emis lorsque cette méthode est appelée.
     */
    private blur(){
        this._isActive = false;
        this.onBlur.next();
    }

    /**
     * Permet d'activier ce mode.
     * L'évènement {@field onActive} est emis lorsque cette méthode est appelée.
     */
    private active(){
        this._isActive= true;
        this.onActive.next();
    }
}
