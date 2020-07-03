const Produit = require('../models').produits
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
            etude_cliniques : produit.etude_cliniques,
            description : produit.description
        }).then((result)=>{
            if(result){
                res.send({message : 'product added'})
            }
        })
    }else res.status(403).send({
        message:
          "Some error occurred while adding products."
      });
    
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
exports.editProduct = (req,res)=>{
  let produit = req.body.produit
    if(produit){
        Produit.update({
            libelle: produit.libelle,
            image_url : produit.image_url,
            prix :produit.prix,
            nb_gellules : produit.nb_gellules,
            guide_gamme:produit.guide_gamme,
            fiche_poso :produit.fiche_poso,
            composition : produit.composition,
            etude_cliniques : produit.etude_cliniques,
            description : produit.description
        },{ where : {id : produit.id}}).then((result)=>{
            if(result){
                res.send({message : 'product edited'})
            }
        })
    }else res.status(403).send({
        message:
          "Some error occurred while editing a product."
      });
}

exports.deleteProduct= (req,res) => {
    if(req.body.id){
        Produit.destroy({
          where : {
            id : req.body.id
          }
        }).then(res => {
          res.status(200).send('done')
        }).catch(err => {
          res.status(404).send({
            message:
              err.message || "Some error occurred while deleting data."
          });
        });
      }
      else res.sendStatus(500)
}