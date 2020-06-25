
const User = require("../models").users;
const Vehicule = require("../models").users; 
exports.getVehicleOfUser = (req,res) => {
    User.findOne({where : {
        email : req.body.email
    }, include: ['vehicule']}).then(user => {
        if(user){
            res.send(user.vehicule)          
        }
        else res.sendStatus(404)
    }).catch(err => {
        res.status(404).send({
          message:
            err.message || "Some error occurred while getting the user."
        });
      });
}