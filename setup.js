const axios = require('axios');

const { sourceUrl } = require('./config');
const { connection, Book, Chapter, Verse } = require('./lib/data/sequelize');

const tasks = [
    axios.get(sourceUrl),
    connection.sync({ force: true })
];

Promise
    .all(tasks)
    .then(populateBooks);

function populateBooks([response]) {
    const books = JSON.parse(response.data.trim());

    books.forEach(book => {
        Book
            .create({ name: book.book })
            .then(populateChapters.bind(null, book.chapters));
    });
}

function populateChapters(chapters, book) {
    chapters.forEach(chapter => {
        const number = Object.keys(chapter).pop();
        const verses = chapter[number];
        
        Chapter
            .create({ number })
            .then(populateVerses.bind(null, verses));
    });
}

function populateVerses(verses, chapter) {
    for (let number in verses) {
        const body = verses[number];
        
        Verse
            .create({ body, number });
    }
}