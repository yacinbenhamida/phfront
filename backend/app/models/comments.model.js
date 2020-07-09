module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("commentaire", {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        content : {
            type : Sequelize.TEXT
        },
        createdAt: {type : Sequelize.DATE , default : Date.now()},
        updatedAt: {type : Sequelize.DATE, default : null},
    });
    return Comment;
};