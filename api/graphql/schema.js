const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./typedefs');

module.exports = makeExecutableSchema({ typeDefs });