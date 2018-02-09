module.exports = bibleService => {
    return {
        Query: {
            book: (_, { id }) => bibleService.getBook(id),
            books: () => bibleService.getBooks()
        }
    };
};

module.exports['@require'] = [
    'lib/services/bible'
];