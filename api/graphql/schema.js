module.exports = ({ makeExecutableSchema }, resolvers, typeDefs) => {
    return makeExecutableSchema({ resolvers, typeDefs });
};

module.exports['@require'] = [
    'graphql-tools',
    'api/graphql/resolvers',
    'api/graphql/typedefs'
];