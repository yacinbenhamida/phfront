module.exports = (sequelize, Sequelize) => {
    const Packproduit = sequelize.define("packproduit", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        idpack : {type : Sequelize.INTEGER},
        idproduit : {type : Sequelize.INTEGER},
        quantite : {type : Sequelize.INTEGER},
        isfree : {type : Sequelize.BOOLEAN , default : false},
        createdAt: {type : Sequelize.DATE , default : Date.now()},
        updatedAt: {type : Sequelize.DATE, default : null},
    });
    return Packproduit;
};