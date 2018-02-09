module.exports = ({ graphqlExpress, graphiqlExpress }, bodyParser, { Router }, schema) => {
    const router = Router();
    
    router.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
    router.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
    
    return router;
};

module.exports['@require'] = [
    'apollo-server-express',
    'body-parser',
    'express',
    'api/graphql/schema'
];