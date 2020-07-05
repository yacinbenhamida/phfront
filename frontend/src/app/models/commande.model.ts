import { Client } from './client.model';

export interface Commande{
    id:number
    prix_total : number
    total_remise : number
    type : string
    client : Client
    nb_produits : number
    createdAt:Date
    updatedAt: Date
}