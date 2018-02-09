const bibleService = require('../../../lib/services/bible');
const chapterLoader = require('../../../lib/data/loaders/chapter');

module.exports = {
    Book: {
        chapters: ({ bookId }) => chapterLoader.load(bookId)
    },
    Query: {
        book: (_, { id }) => bibleService.getBook(id),
        books: () => bibleService.getBooks()
    }
};