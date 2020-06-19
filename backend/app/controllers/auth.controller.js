const passport = require("passport");
const User = require('../models').users
const jwt = require('jsonwebtoken')
const jwtSecret = require('../config/passport/jwtConfig')
const bCrypt = require('bcrypt')

const isValidPassword = function(userpass, password) {
    return bCrypt.compareSync(password, userpass);
}
const generateHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

exports.register = (req,res,next) => {
    passport.authenticate('register', (err, user, info) => {
        if (err) {
          console.log(err);
        }
        if (info != undefined) {
          console.log(info.message);
          res.send(info.message);
        } else {
          req.logIn(user, err => {
            User.findOne({
              where: {
                email: req.body.email,
              },
            }).then(user => {
            if(!user){
              User
                .create({
                    prenom: req.body.prenom,
                    nom: req.body.nom,
                    email: req.body.email,
                    cin : req.body.cin,
                    adresse : req.body.adresse,
                    password : generateHash(req.body.password),
                    isActivated : req.body.isActivated,
                    role : req.body.role
                })
                .then(() => {
                  console.log('user created in db');
                  res.status(200).send({ message: 'user created' });
                });
            }
            else res.sendStatus(403) // already registered
            });
          });
        }
      })(req, res, next);
    
}

exports.login = (req,res,next) => {
    passport.authenticate('login', (err, user, info) => {
        if (err) {
          console.log(err);
        }
        if (info != undefined) {
          console.log(info.message);
          res.send(info.message);
        } else {
          req.logIn(user, err => {
            User.findOne({
              where: {
                email: req.body.email,
              },
            }).then(user => {
            if(user && isValidPassword(user.password,req.body.password)) {
              const token = jwt.sign({ id: user.email }, jwtSecret.secret);
              res.status(200).send({
                auth: true,
                token: token,
                message: 'user found & logged in',
              });
            }
            else res.sendStatus(404)
            });
            
          });
        }
      })(req, res, next);
}