const axios = require('axios');

const { sourceUrl } = require('./config');
const { connection, Book } = require('./lib/data/sequelize');

const tasks = [
    axios.get(sourceUrl),
    connection.sync({ force: true })
];

Promise
    .all(tasks)
    .then(populate);

function populate([response]) {
    const books = JSON.parse(response.data.trim());

    books.forEach(book => {
        Book.create({ name: book.book });
    });
}
