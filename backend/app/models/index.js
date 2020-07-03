const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: '0',

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.vehicules = require('./vehicule.model')(sequelize,Sequelize)
db.produits = require('./produit.model')(sequelize,Sequelize)
db.clients = require('./client.model')(sequelize,Sequelize)
db.packs = require('./pack.model')(sequelize,Sequelize)
// relations

db.users.hasOne(db.vehicules)
db.vehicules.belongsTo(db.users)

db.clients.belongsTo(db.users,{as : 'delegue'})
module.exports = db;