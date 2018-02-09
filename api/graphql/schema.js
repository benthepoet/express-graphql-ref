const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');
const typeDefs = require('./typedefs');

module.exports = makeExecutableSchema({ resolvers, typeDefs });