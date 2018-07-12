module.exports = {
    chapters: ({ bookId }, { BookController }) => BookController().getChapters(bookId)
};