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
db.packsproduits = require('./packproduit.model')(sequelize,Sequelize)
db.commandes = require('./commande.model')(sequelize,Sequelize)
db.commandeproduits = require('./commandeproduit.model')(sequelize,Sequelize)
// relations

db.users.hasOne(db.vehicules)
db.vehicules.belongsTo(db.users)

db.clients.belongsTo(db.users,{as : 'delegue'})
db.commandes.belongsTo(db.clients, {as : 'client'})


// join tbl commande produit
db.produits.belongsToMany(db.commandes,{
    through: 'commandeProduit',
    foreignKey: 'idproduit',
    otherKey: 'idcommande'
})
db.commandes.belongsToMany(db.produits,{
  through: 'commandeProduit',
  otherKey: 'idproduit',
  foreignKey: 'idcommande'
})
db.commandeproduits.belongsToMany(db.produits, {
  through: 'commandeProduit',
  as: 'produits',
  foreignKey: 'id',
  otherKey: 'idproduit'
});

// join tbl pack produit


db.packs.belongsToMany(db.produits,{
  through: 'packproduit',
  foreignKey: 'idpack',
  otherKey: 'idproduit'
})

db.produits.belongsToMany(db.packs,{
  through: 'packproduit',
  foreignKey: 'idproduit',
  otherKey: 'idpack'
})
db.packsproduits.belongsToMany(db.produits, {
  through: 'packproduit',
  as: 'produits',
  foreignKey: 'idproduit',
  otherKey: 'idpack'
});

module.exports = db;