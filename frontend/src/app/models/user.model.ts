export interface User{
    id: number
    nom: string
    prenom:string
    cin :string
    adresse :string
    imageUrl : string
    email:string
    password:string
    isActivated:boolean
    role:string
    last_login:Date
    status: string
    about:string
    createdAt:Date
    updatedAt: Date
}