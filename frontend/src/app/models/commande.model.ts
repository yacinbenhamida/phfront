import { Client } from './client.model';

export interface Commande{
    id:number
    prix_total : number
    total_remise : number
    type : string
    client : Client
    createdAt:Date
    updatedAt: Date
}