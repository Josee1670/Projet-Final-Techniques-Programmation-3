import { Forfait } from './forfait';

export const FORFAITS: Forfait[] = [
    {
        id: '',
        destination: 'Holguin, Cuba',
        villeDepart: 'Québec',
        hotel: {
            nom: 'Paradisus Rio de Oro Resort & Spa',
            adresse: 'Playa Esmeralda, Carretera a Guardalavaca, Rafael Freyre, Holguin, Cuba, 80200',
            nombreEtoiles: 5,
            nombreChambres: 354,
            photo: "https://www.transat.com/fr-CA/hotels/paradisus-rio-de-oro-resort-spa?isPopup=true",
            caracteristiques: [
                "3 piscines",
                "8 restaurants ",
                "8 bars",
                "Wi-Fi : hall, piscine • Spa ($)",
                "Boissons 24 h - collations 24 h",
                "Coffret de sûreté",
                "Mariages"
            ],
        },
        dateDepart: '29/12/2021',
        dateRetour: '05/01/2022',
        duree: 7,
        prix: 3080,
        rabais: 1232,
        prixRabais: 1848,
        forfaitVedette: true

    },
   
    {
        id: '',
        destination: 'Montego Bay, Jamaïque',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Holiday Inn Resort Montego Bay',
            adresse: 'P.O. Box 480 Rose Hall Montego Bay Jamaïque',
            nombreEtoiles: 4,
            nombreChambres: 520,
            photo: "https://www.transat.com/fr-CA/hotels/holiday-inn-resort-montego-bay?isPopup=true",
            caracteristiques: [
                "2 piscines",
                "Wi-Fi : dans tout le complexe",
                "Air climatiser",
                "Animaux acceptés",
                "Navette aéroport",
                "5 restaurants",
                "Salle d'exercice",
                "Spa ($)"
            ],
        },
        
        dateDepart: '07/01/2022',
        dateRetour: '14/01/2022',
        duree: 7,
        prix: 2534,
        rabais: 1295,
        prixRabais: 1239,
        forfaitVedette: true
    },
    {
        id: '',
        destination: 'Porto, Portugal',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Hotel Dom Henrique',
            adresse: 'Rua do Bolhão 223, Porto, Portugal, 400-112',
            nombreEtoiles: 4,
            nombreChambres: 112,
            photo: "https://www.transat.com/fr-CA/hotels/hotel-dom-henrique?isPopup=true",
            caracteristiques: [
                "Petit-déjeuner",
                "2 piscines",
                "Wi-Fi : dans tout le complexe",
                "Air climatiser",
                "1 Bar",
                "2 restaurants",
                "Coffret de sûreté ($)",

            ],
        },
        dateDepart: '13/03/2022',
        dateRetour: '20/03/2022',
        duree: 7,
        prix: 2204,
        rabais: 705,
        prixRabais: 1499,
        forfaitVedette: true

    },
    
    {
        id: '',
        destination: 'Paris, France',
        villeDepart: 'Vancouver',
        hotel: {
            nom: 'Citadines Maine Montparnasse Paris',
            adresse: '67, avenue du Maine 75014 Paris, France',
            nombreEtoiles: 3,
            nombreChambres: 98,
            photo: "https://www.transat.com/fr-CA/hotels/citadines-bastille-gare-de-lyon-paris?isPopup=true",
            caracteristiques: [
                "Wi-Fi : hall, chambre",
                "Stationnement ($)",
                "1 restaurant",
                "Coffret de sûreté",
                "Accessible",
                "Séchoir à cheveux",
                "Resto-bar"
            ],
        },
        dateDepart: '02/05/2022',
        dateRetour: '09/05/2022',
        duree: 7,
        prix: 2169,
        rabais: 400,
        prixRabais: 1769,
        forfaitVedette: false

    },

    {
        id: '',
        destination: 'Guadeloupe, Guadeloupe',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Pierre et Vacances Village de Sainte-Anne',
            adresse: 'Seo La Pointe de Helleux Saint-Anne Guadeloupe, 97180',
            nombreEtoiles: 3,
            nombreChambres: 514,
            photo: "https://www.transat.com/fr-CA/hotels/pierre-et-vacances-village-de-sainte-anne?isPopup=true",
            caracteristiques: [
                "Face à la plage",
                "3 piscines",
                "2 Bar",
                "4 restaurants",
                "Wi-Fi : dans tout le complexe",
                "Salle d'exercice",
                "Coffret de sûreté ($)",
                "Plage"
            ],
        },
        dateDepart: '16/05/2022',
        dateRetour: '23/05/2022',
        duree: 7,
        prix: 2481,
        rabais: 422,
        prixRabais: 2059,
        forfaitVedette: false

    }
]
