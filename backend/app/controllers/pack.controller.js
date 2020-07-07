const Pack = require('../models').packs
const PackProduit = require('../models').packsproduits
const Produit  = require('../models').produits
exports.addPack = (req, res)=> {
    const pack = req.body.pack;
    const packproduits = req.body.produits
    if(pack){
        Pack.create(pack,{w:1}, { returning: true }).then(respack=>{
            if(respack && packproduits){
                packproduits.forEach(element => {
                    Produit.findAll({ where : {id : element.produit}}).then(produit=>{
                        if(produit){
                            const prodpack = {
                                idpack : pack.id,
                                idproduit : produit.id,
                                quantite : element.quantite,
                                isfree : element.isfree,
                            }
                            PackProduit.create(prodpack,{w:1}, { returning: true }).then(
                                finalresult=> {
                                    if(finalresult) res.send('inserted custom packs')
                                }
                            )
                        }
                        else res.send('no products')
                    })
                });  
            }else res.send('no pack')
        })
    }
    else res.send('you forgot eveything')
}

exports.getAllPacks = (req,res)=>{
    Pack.findAll().then(result=>{
        res.send(result)
    })
}