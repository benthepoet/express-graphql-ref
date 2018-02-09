const axios = require('axios');

const { sourceUrl } = require('./config');
const { connection, Book } = require('./lib/data/sequelize');

const tasks = [
    axios.get(sourceUrl),
    connection.sync()
];

Promise
    .all(tasks)
    .then(populate);

function populate([response]) {
    response.data.forEach(book => {
        Book.create({ name: book.book });
    });
}