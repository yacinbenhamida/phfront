import { Produit } from './produit.model';
import { Pack } from './pack.model';

export interface PackProduit{
    id: number,
    idpack : number,
    idproduit : number,
    produit : Produit
    pack : Pack
    quantite : number,
    isfree : boolean,
    createdAt:Date,
    updatedAt: Date,
    produits_packs : Produit[]
}