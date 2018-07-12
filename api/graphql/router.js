const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const { Router } = require('express');
const requireDir = require('require-dir');
const fp = require('lodash/fp');

const Controllers = requireDir('../../../lib/controllers');
const schema = require('./schema');

const router = Router();

router.use('/graphql', bodyParser.json(), graphqlExpress(setGraphqlOptions));
router.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

module.exports = router;

function setGraphqlOptions({ user }) {
    const controllers = fp.mapValues(Controller => () => new Controller(user), Controllers);
    
    return {
        context: {
            ...controllers
        },
        schema
    };
}