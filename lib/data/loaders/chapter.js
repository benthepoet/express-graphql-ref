const R = require('ramda');
const DataLoader = require('dataloader');

const { Chapter } = require('../sequelize');

module.exports = new DataLoader(load);

function load(bookIds) {
  const queryOptions = {
    where: {
      bookId: bookIds
    }
  };

  return Chapter
    .findAll(queryOptions)
    .then(mapRows.bind(null, bookIds, 'bookId'));
}

function mapRows(ids, key, rows) {
  const keyedRows = R.groupBy(row => row[key], rows);
  return ids.map(id => keyedRows[id] || []);
}