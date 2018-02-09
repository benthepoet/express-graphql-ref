const bibleService = require('../../../lib/services/bible');

module.exports = {
    Query: {
        book: (_, { id }) => bibleService.getBook(id),
        books: () => bibleService.getBooks()
    }
};