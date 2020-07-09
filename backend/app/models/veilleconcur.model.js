module.exports = (sequelize, Sequelize) => {
    const Veille = sequelize.define("veilleconcurrentielle", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        lib_prod: {
            type: Sequelize.STRING
        },
        labo :{
            type: Sequelize.STRING
        },
        presentation : {
            type: Sequelize.TEXT
        },
        prix : {
            type: Sequelize.DOUBLE
        },
        composition : {
            type: Sequelize.TEXT
        },
        nb_boites_vendues: {
            type: Sequelize.INTEGER
        },
        partenaires : {
            type : Sequelize.TEXT
        },
        actions : {
            type : Sequelize.TEXT
        },
        posologie : {
            type : Sequelize.TEXT
        },
        commentaires : {
            type : Sequelize.TEXT
        },
        createdAt: {type : Sequelize.DATE , default : Date.now()},
        updatedAt: {type : Sequelize.DATE, default : null},
    });
    return Veille;
};