import { Caracteristique } from './caracteristique';

export interface Recherche {
    dateDepart: Date,
    duree: number,
    caracteristiques: Array<Caracteristique>,
    nbEtoiles: number
}