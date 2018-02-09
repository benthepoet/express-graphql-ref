const path = require('path');
const R = require('ramda');

const { NODE_ENV = 'development' } = process.env;

const config = {
    connectionUri: `sqlite://${path.resolve(__dirname)}/bible.sqlite`,
    sourceUrl: 'https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json'
};

const transforms = {
    production: {}
};

module.exports = R.merge(config, transforms[NODE_ENV]);