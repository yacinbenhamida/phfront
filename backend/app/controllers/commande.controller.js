const Commande = require('../models').commandes
const CommandeProduit = require('../models').commandeproduits
const Produit = require('../models').produits
const Client = require('../models').clients

exports.addCommande = (req,res) => {
    const commande = req.body.commande
    const produits = req.body.produits
    if(commande && produits){
        Commande.create(commande, {w: 1}, { returning: true }).then(cmd=>{
        if(cmd){
            // affectation client
            const cli = commande.client
            if(cli){
                Client.findOne({where : {id : cli.id}}).then(client=>{
                cmd.setClient(client)
                cmd.save()
            })
            }
            produits.forEach(element => {
                Produit.findOne({where : {id : element.produit}}).then(prod=>{
                    if(prod){
                        const commande_produit = {
                            idproduit : prod.id,
                            idcommande : cmd.id,
                            quantite : element.quantite ? element.quantite : 0,
                            remise : element.reduction? element.reduction : 0,
                            prixTTC : element.reduction ? ((prod.prix) - (prod.prix*(element.reduction/100)))* element.quantite : 0
                        }
                        CommandeProduit.create(commande_produit,{ w: 1 }, { returning: true }).then(cp=>{
                            if(cp) res.status(200).json(cp)
                            else res.status(404).send({message : 'failed to add products'})       
                        })
                    } 
                    else res.status(404).send({message : 'no products'})                   
                })
            });
        }
        else res.status(404).send({message : 'no commande'})            
    })
    }
    else res.status(404).send({message : 'nothing'})            
    
}
exports.getAllCommandes = (req,res) => {
    Commande.findAll({include: ['client']}).then(result=>{
        res.send(result)
    })
}