// join table
module.exports = (sequelize, Sequelize) => {
    const CommandeProduit = sequelize.define("commandeProduit", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        idproduit : {
            type: Sequelize.INTEGER,
        },
        idcommande : {
            type: Sequelize.INTEGER,
        },
        quantite : {type: Sequelize.INTEGER},
        remise : {type: Sequelize.INTEGER},
        createdAt: {type : Sequelize.DATE , default : Date.now()},
        updatedAt: {type : Sequelize.DATE, default : null},
    });
    return CommandeProduit;
};