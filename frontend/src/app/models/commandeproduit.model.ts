import { Produit } from './produit.model';
import { Commande } from './commande.model';

export interface CommandeProduit{
    id: number,
    produits:Produit[],
    commande : Commande,
    quantite : number,
    remise : number,
    prixTTC : number,
    createdAt: Date,
    updatedAt: Date,
}