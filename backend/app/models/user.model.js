module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        nom: {
            type: Sequelize.STRING
        },
        prenom: {
            type: Sequelize.STRING
        },
        cin : {
            type: Sequelize.STRING,  
        },
        adresse : {
            type: Sequelize.STRING
        },
        imageUrl : {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        isActivated: {
            type: Sequelize.BOOLEAN,
            default: false
        },
        role: {
            type: Sequelize.ENUM,
            values: ['admin', 'superviseur', 'delege']
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    });

    return User;
};