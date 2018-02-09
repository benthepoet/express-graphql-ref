const Sequelize = require('sequelize');

module.exports = (connection) => {
    return connection.define('chapter', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bookId: Sequelize.INTEGER,
        number: Sequelize.INTEGER
    });
};