const cors = require('cors');
const express = require('express');

const graphqlRouter = require('./graphql/router');
const logger = require('./middleware/logger');

const api = express();

api.use(cors());
api.use(graphqlRouter);

module.exports = api;