module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        libelle: {
            type: Sequelize.STRING
        },
        description :{
            type: Sequelize.STRING
        },
        image_url : {
            type: Sequelize.STRING
        },
        prix : {
            type: Sequelize.INTEGER
        },
        nb_gellules : {
            type: Sequelize.INTEGER
        },
        guide_gamme: {
            type: Sequelize.STRING
        },
        fiche_poso : {
            type : Sequelize.STRING
        },
        composition : {
            type : Sequelize.TEXT
        },
        etude_cliniques : {
            type : Sequelize.STRING
        },
        createdAt: {type : Sequelize.DATE , default : Date.now()},
        updatedAt: {type : Sequelize.DATE, default : null},
    });
    return Produit;
};