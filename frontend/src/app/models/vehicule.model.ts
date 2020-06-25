import { User } from './user.model';

export interface Vehicule{
    id: number
    modele: string
    carte_grise: string
    date_echeance_assurance : Date
    numero_carte_essence : string
    code_carte_essence : string
    date_derniere_vidange :Date
    kilometrage : number
    amortissement_vehicule :number
    user : User
    createdAt: Date
    updatedAt: Date
}