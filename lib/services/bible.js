const { Book } = require('../data/sequelize');

module.exports = {
    getBook,
    getBooks
};

function getBook(id) {
    return Book.findById(id);
}

function getBooks() {
    return Book.findAll();
}