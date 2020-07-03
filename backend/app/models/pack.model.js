module.exports = (sequelize, Sequelize) => {
    const Pack = sequelize.define("pack", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        nom_pack: {
            type: Sequelize.STRING
        },
        description :{
            type: Sequelize.TEXT
        },
        type_pack : {
            type: Sequelize.ENUM,
            values: ['panache', 'normal']
        },
        pourcentage_unite_gratuites_grossiste: {
            type: Sequelize.INTEGER,
        },
        pourcentage_unite_gratuites_vd : {
            type: Sequelize.INTEGER,
        },
        valeur_bon_achat : {
            type: Sequelize.INTEGER,
        },
        createdAt: {type : Sequelize.DATE , default : Date.now()},
        updatedAt: {type : Sequelize.DATE, default : null},
    });
    return Pack;
};