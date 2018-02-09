const cors = require('cors');
const express = require('express');

const authRouter = require('./routers/auth');
const graphqlRouter = require('./routers/graphql');
const logger = require('./middleware/logger');

const api = express();

api.use(cors());
api.use(authRouter);
api.use(graphqlRouter);

module.exports = api;