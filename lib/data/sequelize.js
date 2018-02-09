const Sequelize = require('sequelize');

const { connectionUri } = require('../../config');

const connection = new Sequelize(connectionUri);
const Book = require('./models/book')(connection);

module.exports = {
    connection,
    Book
};