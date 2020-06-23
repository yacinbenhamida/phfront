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

exports.register = (req, res, next) => {
    User.findOne({
      where: {
        email: req.body.user.email,
      },
    }).then(user => {
      if (!user) {
        User
          .create({
            prenom: req.body.user.prenom,
            nom: req.body.user.nom,
            email: req.body.user.email,
            cin: req.body.user.cin,
            adresse: req.body.user.adresse,
            password: generateHash(req.body.user.password),
            isActivated: req.body.user.isActivated,
            about : req.body.user.about,
            sexe : req.body.user.sexe,
            role: req.body.user.role,
            date_naissance : req.body.user.date_naissance,
            imageUrl : req.body.user.imageUrl,
            emailPerso : req.body.user.emailPerso,
            telephone : req.body.user.telephone,
            telephone_perso : req.body.user.telephone_perso,
            type_contrat : req.body.user.type_contrat,
            salaire : req.body.user.salaire,
            frais : req.body.user.frais,
            createdAt : Date(),
            status : 'offline'
          })
          .then(() => {
            console.log('user created in db');
            res.status(200).send({ message: 'user created' });
          });
      }
      else res.sendStatus(403) // already registered
    });
}

exports.login = (req, res, next) => {
    console.log('here')
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then(user => {
      if (user && isValidPassword(user.password, req.body.password)) {
        const token = jwt.sign({ id: user.email }, jwtSecret.secret);
        res.status(200).send({
          auth: true,
          token: token,
          message: 'user found & logged in',
        });
      }
      else res.sendStatus(404)
    });
}
