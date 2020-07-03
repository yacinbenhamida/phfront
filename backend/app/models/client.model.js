module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        nom_client: {
            type: Sequelize.STRING
        },
        Localite : {
            type: Sequelize.STRING
        },
        addresse :{
            type: Sequelize.TEXT
        },
        type_client : {
            type: Sequelize.ENUM,
            values: ['pharmacie', 'grossiste','autres']
        },
        partenaires : {
            type: Sequelize.TEXT
        },
        createdAt: {type : Sequelize.DATE , default : Date.now()},
        updatedAt: {type : Sequelize.DATE, default : null},
    });
    return Client;
};