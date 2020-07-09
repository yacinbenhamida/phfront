const Client = require('../models').clients
const User = require('../models').users
exports.addClient = (req,res) => {
    let client = req.body.client
    if(client){
        Client.create(client,{w:1},{returning : true}).then((result)=>{
            if(result){
              if(client.delegue){
                User.findOne({
                  where : {
                    id : client.delegue,  
                  }
                }).then(deleg=>{
                  if(deleg){
                    Client.findOne({where : {
                      nom_client : client.nom_client
                    }}).then(cli=>{
                      cli.setDelegue(deleg)
                      cli.save()
                      res.send({message : 'grossiste and deleg added'})
                    })
                  }
                })
              }
                res.send({message : 'client added'})
            }
        })
    }else res.status(403).send({
        message:
          "Some error occurred while adding products."
      });
    
}
exports.getAllClients = (req,res)=>{
    const type = req.query.type
    if(type){
        Client.findAll({
            where : {
                type_client : type
            }
            , include: ['delegue']})
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving clis."
          });
        });
}
    }
    
exports.editClient = (req,res)=>{
  let client = req.body.client
    if(client){
        Client.update({
            nom_client: client.nom_client,
            Localite : client.Localite,
            addresse :client.addresse,
            type_client : client.type_client,
            partenaires : client.partenaires,
        },{ where : {id : client.id}}).then((result)=>{
          if(result){
            if(client.delegue){
              User.findOne({
                where : {
                  id : client.delegue.id,  
                }
              }).then(deleg=>{
                if(deleg){
                  Client.findOne({where : {
                    nom_client : client.nom_client
                  }}).then(cli=>{
                    cli.setDelegue(deleg)
                    cli.save()
                    res.send({message : 'grossiste and deleg edited'})
                  })
                }
              })
            }
              res.send({message : 'client edited'})
          }
        })
    }else res.status(403).send({
        message:
          "Some error occurred while editing a client."
      });
}

exports.deleteClient = (req,res) => {
    if(req.body.id){
        Client.destroy({
          where : {
            id : req.body.id
          }
        }).then(res => {
          res.sendStatus(200)
        }).catch(err => {
          res.status(404).send({
            message:
              err.message || "Some error occurred while deleting data."
          });
        });
      }
      else res.sendStatus(500)
}
