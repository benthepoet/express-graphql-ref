const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const { Router } = require('express');

const schema = require('../graphql/schema');

const router = Router();

router.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
router.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

module.exports = router;