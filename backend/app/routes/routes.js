const users = require("../controllers/user.controller.js");
const passport = require("passport");
const auth = require("../controllers/auth.controller")
const cars = require("../controllers/vehicule.controller")
const products = require("../controllers/produit.controller")
const clients = require('../controllers/client.controller')
const commande = require('../controllers/commande.controller')

module.exports = app => {
  app.post('/login', auth.login);
  app.use('/logout', passport.authenticate('jwt', {
    session: false
  })).get('/logout', auth.logout);
  app.use('/register', passport.authenticate('jwt', {
    session: false
  })).post('/register', auth.register);
  app.use('/connected', passport.authenticate('jwt', {
    session: false
  })).get('/connected', users.loggedOn);
  app.use('/allUsers', passport.authenticate('jwt', {
    session: false
  })).get('/allUsers', users.findAll);
  app.use('/allDeleges', passport.authenticate('jwt', {
    session: false
  })).get('/allDeleges', users.findAllDeleges);
  app.use('/deleteUser', passport.authenticate('jwt', {
    session: false
  })).post('/deleteUser', users.deleteUser);
  app.use('/getUserCars', passport.authenticate('jwt', {
    session: false
  })).post('/getUserCars', cars.getVehicleOfUser);
  app.use('/updateUser', passport.authenticate('jwt', {
    session: false
  })).post('/updateUser', auth.editUser);
  // products 
  app.use('/addProduct', passport.authenticate('jwt', {
    session: false
  })).post('/addProduct', products.addProduct);
  app.use('/editProduct', passport.authenticate('jwt', {
    session: false
  })).post('/editProduct', products.editProduct);
  app.use('/allProducts', passport.authenticate('jwt', {
    session: false
  })).get('/allProducts', products.getAllProducts);
  app.use('/deleteProduct', passport.authenticate('jwt', {
    session: false
  })).post('/deleteProduct', products.deleteProduct);
  app.use('/allClients', passport.authenticate('jwt', {
    session: false
  })).get('/allClients', clients.getAllClients);
  app.use('/addClient', passport.authenticate('jwt', {
    session: false
  })).post('/addClient', clients.addClient);
  app.use('/editClient', passport.authenticate('jwt', {
    session: false
  })).post('/editClient', clients.editClient);
  app.use('/deleteClient', passport.authenticate('jwt', {
    session: false
  })).post('/deleteClient', clients.deleteClient);
  app.use('/addCommande', passport.authenticate('jwt', {
    session: false
  })).post('/addCommande', commande.addCommande);
  app.use('/getAllCommandes', passport.authenticate('jwt', {
    session: false
  })).get('/getAllCommandes', commande.getAllCommandes);
  app.use('/getCommandesProducts', passport.authenticate('jwt', {
    session: false
  })).post('/getCommandesProducts', commande.getProduitsOfCommande);
  app.use('/deleteCommande', passport.authenticate('jwt', {
    session: false
  })).post('/deleteCommande', commande.deleteCommande);
};