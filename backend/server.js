const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
const app = express();
const db = require("./app/models");

var corsOptions = {
  origin: "http://"+process.env.NODE_ENV+':'+process.env.NODE_ENV
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync().then(() => {
  console.log("sync to db.");
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
require("./app/routes/user.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});