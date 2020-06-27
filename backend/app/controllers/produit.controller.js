const Produit = require('../models/produit.model').produits
exports.addProduct = (req,res) => {
    let produit = req.body.produit
    if(produit){
        Produit.create({
            libelle: produit.libelle,
            image_url : produit.image_url,
            prix :produit.prix,
            nb_gellules : produit.nb_gellules,
            guide_gamme:produit.guide_gamme,
            fiche_poso :produit.fiche_poso,
            composition : produit.composition,
            etude_cliniques : produit.etude_cliniques
        }).then((result)=>{
            if(result){
                res.send({message : 'product added'})
            }
        })
    }else res.status(403)
    
}
exports.getAllProducts = (req,res)=>{
    Produit.findAll()
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving products."
          });
        });
}