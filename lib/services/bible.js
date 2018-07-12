const { Book } = require('../data/sequelize');
const BaseService = require('./base');

class BibleService extends BaseService {
    getBook(id) {
        return Book.findById(id);
    }
    
    getBooks() {
        return Book.findAll();
    }
}