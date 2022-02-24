import { Hotel } from "./hotel";

export interface Forfait {
    id: string,
    destination: string,
    villeDepart: string,
    hotel: Hotel,
    dateDepart: string,
    dateRetour: string,
    duree: number,
    prix: number,
    rabais: number,
    prixRabais: number,
    forfaitVedette: boolean,
    
}
