module.exports = {
    book: (_, { id }, { BookController }) => BookController().getBook(id),
    books: (_, {}, { BookController }) => BookController().getBooks()
}