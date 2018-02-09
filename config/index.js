module.exports = R => {
    const { NODE_ENV = 'development' } = process.env;
    
    const config = {
        connectionUri: `sqlite://${process.cwd()}/bible.sqlite`,
        sourceUrl: 'https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json'
    };
    
    const transforms = {
        production: {}
    };
    
    return R.merge(config, transforms[NODE_ENV]);
};

module.exports['@require'] = [
    'ramda'
];
