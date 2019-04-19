import { Mode } from "./mode";

/**
 * Représente un mode de clavier singulier.
 *
 * @version 1
 * @author Chendjou deGrace
 * @since 19-04-2019
 *
 * @see Mode
 */
export class SingleMode extends Mode{

    /**
     * Les modes incompatibles avec ce mode.
     * Les modes incompatibles d'un mode sont automatiquement désactivés lorsque ce mode s'active.
     */
    incompatibleModes: SingleMode[] = [];

    /**
     * Création d'un mode singulier.
     * @param _isActive Si le mode sera actif dès sa création.
     * @param name Le nom du mode.
     * @param activeColor Couleur indiquant que le mode est actif.
     */
    constructor( public name: string, public activeColor="#3399FF", protected _isActive=false){
        super(name);

        this.onActive.subscribe(() => {
            this.incompatibleModes.forEach(m => m.blur());
        });
    }

    /**
     * Active le mode s'il est désactivé, ou le d"sactive s'il est activé.
     */
    switch(){
        if(this._isActive){
            this.blur();
        }else{
            this.active();
        }
    }

    /**
     * Permet de désactiver ce mode.
     * L'évènement {@field onBlur} est emis lorsque cette méthode est appelée.
     */
    blur(){
        if(this.isActive){
            this._isActive = false;
            this.onBlur.next();
        }
    }

    /**
     * Permet d'activer ce mode.
     * L'évènement {@field onActive} est emis lorsque cette méthode est appelée.
     */
    active(){
        if(!this.isActive){
            this._isActive= true;
            this.onActive.next();
        }
    }
}
