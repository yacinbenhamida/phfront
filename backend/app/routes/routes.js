module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const passport = require('../config/passport/passport.js');
    const router = require("express").Router();
    const auth = require("../controllers/auth.controller")

    router.get("/connected", users.loggedOn);
    router.post('/login', auth.login)
    router.post('/register', auth.register)
    app.use('/api/', router);
  };