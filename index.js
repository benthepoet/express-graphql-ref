const api = require('./api');

api.listen(process.env.PORT || 8080, () => {
    console.log('API ready');
});