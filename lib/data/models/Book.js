const Sequelize = require('sequelize');

module.exports = (connection) => {
    return connection.define('book', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING
    });
};