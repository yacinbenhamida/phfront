const User = require("../models").users;
const passport = require("passport");


exports.loggedOn = (req, res , next) => {

  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info != undefined) {
      console.log(info.message);
      res.send(info.message);
    } else {
      console.log('user found in db from route');
      User.findOne({
        where: {
          email: req.query.email,
        },
      }).then(user => {
        if(user) {
        res.status(200).send({
          auth: true,
          prenom: user.prenom,
          nom: user.nom,
          email: user.email,
          role : user.role,
          status : user.status,
          about : user.about
        });
      }
      else res.sendStatus(401)
      })
    }
  })(req, res, next);
    
};
exports.findAll = (req,res) => {
  User.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
}