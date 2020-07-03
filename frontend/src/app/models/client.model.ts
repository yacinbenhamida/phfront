import { User } from './user.model';

export interface Client{
    id:number
    nom_client: string
    Localite :string
    addresse :string
    type_client : string
    partenaires : string
    createdAt: Date
    updatedAt: Date
    delegue : User
    animatrice : User
}