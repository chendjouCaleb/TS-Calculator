
import {Dictionary} from "@everest/collections";
import {Symbol} from "./symbols";
import {ElementAlreadyExistsError, ElementNotFoundError} from "./error";

/**
 * Contient touts les symbols qui seront utilisé dans la calcultraice.
 * @version 1
 * @author Chendjou deGrace
 * @since 19-04-2019
 */
export class SymbolContainer {
    symbols = new Dictionary<string, Symbol>();

    /**
     * Pour rajouter un symbole.
     * @param symbol Le symbole à rajouter.
     */
    addSymbol(symbol: Symbol){
        if(this.symbols.containsKey(symbol.name)){
            throw new ElementAlreadyExistsError("Le nom du symbole est déjà utilisé.")
        }
        this.symbols.put(symbol.name, symbol);
    }

    get(name: string){
        if(!this.symbols.containsKey(name)){
            throw new ElementNotFoundError(`Aucun symbole avec la clé ${name} n'existe.`);
        }

        return this.symbols.get(name);
    }

    /**
     * Permet de charger les symbols par défault.
     */
    addDefaultSymbol() {
        this.addSymbol(new Symbol("x²", "²", "Elève le nombre x au carré"));
        this.addSymbol(new Symbol("x³", "³", "Elève le nombre x au cube"));

        this.addSymbol(new Symbol("√", "√x", "Calcul la racine carée x"));
        this.addSymbol(new Symbol("ln", "ln(x)", "Calcul le logarithme népéerien de x"));

        this.addSymbol(new Symbol("cos", "cos(x)", "Calcul le cosinus de l'angle x"));
        this.addSymbol(new Symbol("sin", "sin(x)", "Calcul le sinus de l'angle x"));
        this.addSymbol(new Symbol("tan", "tan(x)", "Calcul la tangente de l'angle x"));

        this.addSymbol(new Symbol("cosh", "cosh(x)", "Calcul le cosinus hyperbolique de l'angle x"));
        this.addSymbol(new Symbol("sinh", "sinh(x)", "Calcul le sinus hyperbolique de l'angle x"));
        this.addSymbol(new Symbol("tanh", "tanh(x)", "Calcul la tangente hyperbolique de l'angle x"));

        this.addSymbol(new Symbol("cos⁻¹", "cos⁻¹(x)", "Calcul l'angle dont le cosinus vaut x"));
        this.addSymbol(new Symbol("sin⁻¹", "sin⁻¹(x)", "Calcul l'angle dont le sinus  vaut x"));
        this.addSymbol(new Symbol("tan⁻¹", "tan⁻¹(x)", "Calcul l'angle dont la tangente  vaut x"));

        this.addSymbol(new Symbol("cosh⁻¹", "cosh⁻¹(x)", "Calcul l'angle dont le cosinus hyberbolique vaut x"));
        this.addSymbol(new Symbol("sinh⁻¹", "sinh⁻¹(x)", "Calcul l'angle dont le sinus hyberbolique  vaut x"));
        this.addSymbol(new Symbol("tanh⁻¹", "tanh⁻¹(x)", "Calcul l'angle dont la tangente hyberbolique  vaut x"));
        return this;
    }
}