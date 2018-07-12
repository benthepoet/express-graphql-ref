const BaseController = require('./base');
const bibleService = require('../services/bible');
const chapterLoader = require('../data/loaders/chapter');

class BibleController extends BaseController {
    getBook(id) {
        return bibleService.getBook(id);
    }
    
    getBooks() {
        return bibleService.getBooks();
    }
    
    getChapters(bookId) {
        return chapterLoader.load(bookId);
    }
}

module.exports = BibleController;