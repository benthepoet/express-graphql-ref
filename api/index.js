module.exports = (cors, express, graphqlRouter, logger) => {
    const api = express();
    
    api.use(cors());
    api.use(graphqlRouter);
    
    return api;
}

module.exports['@require'] = [
    'cors',
    'express',
    'api/graphql/router',
    'api/middleware/logger'
];