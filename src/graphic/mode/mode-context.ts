import {Mode} from "./mode";
import {SingleMode} from "./single-mode";
import {CombinedMode} from "./combined-mode";
import {List} from "@everest/collections";
import {ElementAlreadyExistsError, ElementNotFoundError} from "../../error";

/**
 * Contexte de mode pour la calculatrice graphique.
 *
 * @version 1
 * @author Chendjou deGrace
 * @since 19-04-2019
 *
 * @see Mode
 */
export class ModeContext {

    /**
     * Ensemble des modes singuliers disponibles.
     */
    private _singleModes = new List<SingleMode>();

    /**
     * Ensemble des modes combinés disponibles.
     */
    private _combinedModes = new List<CombinedMode>();

    get combinedModes() {
        return this._combinedModes;
    }

    get singleModes() {
        return this._singleModes;
    }

    /**
     * Ensembe des modes disponibles.
     */
    get modes() {
        let _modes = new List<Mode>();
        _modes.addRange(this._singleModes);
        _modes.addRange(this._combinedModes);

        return _modes;
    }

    /**
     * Ajoute un {@link SingleMode} au contexte.
     * @param mode Le mode à ajouter.
     */
    addSingleMode(mode: SingleMode) {
        if (this.singleModes.contains(mode)) {
            return;
        }
        if (this.singleModes.exists(m => m.name === mode.name)) {
            throw new ElementAlreadyExistsError("Un autre mode existe déjà avec la clé renseignée.")
        }

        this.singleModes.add(mode);

    }

    /**
     * Permet d'ajouter un {@link CombinedMode}.
     * @param mode Le mode à ajouter.
     */
    addCombinedMode(mode: CombinedMode) {
        if (this.combinedModes.contains(mode)) {
            return;
        }

        if (this.combinedModes.exists(m => m.name === mode.name)) {
            throw new ElementAlreadyExistsError("Un autre mode existe déjà avec la clé renseignée.")
        }

        this.combinedModes.add(mode);

    }

    /**
     * Permet de retrouver un {@link SingleMode} à partir de son nom.
     * @param name Le nom du mode à rechercher.
     * @exception ElementNotFoundError si aucun {@link SingleMode} ne correspond au nom fournit.
     */
    getSingleMode(name: string) {

        for(let mode of this.singleModes){
            if(mode.name === name){
                return mode;
            }
        }
        throw new ElementNotFoundError(`Le mode singulier avec le nom ${name} n'existe pas`)
    }

    /**
     * Permet de retrouver un {@link CombinedMode} à partir de son nom.
     * @param name Le nom du mode à rechercher.
     * @exception ElementNotFoundError si aucun {@link CombinedMode} ne correspond au nom fournit.
     */
    getCombinedMode(name: string) {

        for(let mode of this.combinedModes){
            if(mode.name === name){
                return mode;
            }
        }
        throw new ElementNotFoundError(`Le mode combiné avec le nom ${name} n'existe pas`)
    }
}