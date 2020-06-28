const users = require("../controllers/user.controller.js");
const passport = require("passport");
const auth = require("../controllers/auth.controller")
const cars = require("../controllers/vehicule.controller")
const products = require("../controllers/produit.controller")
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
};