module.exports = (sequelize, Sequelize) => {
    const Commande = sequelize.define("commande", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        prix_total : {
            type : Sequelize.DOUBLE
        },
        total_remise : {
            type : Sequelize.DOUBLE
        },
        type : {
            type: Sequelize.ENUM,
            values: ['direct', 'grossiste']
        },
        nb_produits : {
            type : Sequelize.DOUBLE
        },
        createdAt: {type : Sequelize.DATEONLY , default : Date.now()},
        updatedAt: {type : Sequelize.DATEONLY, default : null},
    });
    return Commande;
};