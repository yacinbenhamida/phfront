import { Produit } from './produit.model';
import { Commande } from './commande.model';

export interface CommandeProduit{
    id: number,
    produit:Produit,
    commande : Commande,
    quantite : number,
    remise : number,
    createdAt: Date,
    updatedAt: Date,
}