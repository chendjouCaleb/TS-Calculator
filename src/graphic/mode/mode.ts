import { ReplaySubject } from "rxjs";

/**
 * Represente la class de base pour le différents mode du clavier visuel.
 * @version 1
 * @author Chendjou deGrace
 * @since 19-04-2019
 */
export abstract class Mode{

    /**
     * Evènement emis lorsque le mode est activé.
     */
    private _onActive: ReplaySubject<Mode>;

    /**
     * Evènement emis lorsque le mode est désactivé.
     */
    private _onBlur: ReplaySubject<Mode>;

    /**
     * Indique si le mode est actif.
     */
    protected _isActive = false;

    /**
     * Constructeur de base pour la création d'un nouveau mode.
     * @param name Le nom du mode.
     */
    protected constructor(public name: string){
        this._onActive = new ReplaySubject();
        this._onBlur = new ReplaySubject();
    }

    get isActive() {
        return this._isActive;
    }

    get onActive(){
        return this._onActive;
    }

    get onBlur() {
        return this._onBlur;
    }
}