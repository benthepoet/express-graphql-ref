const ioc = require('electrolyte');

ioc.use(ioc.dir('.'));
ioc.use(ioc.node_modules());

ioc
    .create('api')
    .then(start)
    .catch(error);

function start(api) {
    api.listen(process.env.PORT || 8080, () => console.log('API ready'));
}

function error({ code, message }) {
    console.log(`${code}: ${message}`);
}