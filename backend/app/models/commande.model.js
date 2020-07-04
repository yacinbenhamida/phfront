module.exports = (sequelize, Sequelize) => {
    const Commande = sequelize.define("commande", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        prix_total : {
            type : Sequelize.INTEGER
        },
        total_remise : {
            type : Sequelize.INTEGER
        },
        type : {
            type: Sequelize.ENUM,
            values: ['direct', 'grossiste']
        },
        createdAt: {type : Sequelize.DATE , default : Date.now()},
        updatedAt: {type : Sequelize.DATE, default : null},
    });
    return Commande;
};