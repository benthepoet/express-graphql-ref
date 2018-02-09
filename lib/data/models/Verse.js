const Sequelize = require('sequelize');

module.exports = (connection) => {
    return connection.define('verse', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        chapterId: Sequelize.INTEGER,
        number: Sequelize.INTEGER,
        body: Sequelize.STRING
    });
};