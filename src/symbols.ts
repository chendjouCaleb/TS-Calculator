/**
 * Represente un symbole(chiffre, caractère, fonction) pouvant êetre utilisé dans un calcul.
 * @version 1
 * @author Chendjou deGrace
 * @since 19-04-2019
 */
export class Symbol {

    /**
     * Création d'un symbole.
     * @param name Le nom du symbole. C'est aussi celui qui sera affiché à l'utilisateur.
     * @param signature Donne la signature dans le cas où le symbole est une fonction.
     * C'est la signature qui sera employée pour le calcul.
     * @param description Une description du symbole.
     */
    constructor(public name: string, public signature?: string, public description?: string) {}


}