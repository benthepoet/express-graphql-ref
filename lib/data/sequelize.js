module.exports = (Sequelize, { connectionUri }, Book) => {
    const connection = new Sequelize(connectionUri);  
    
    return { 
        connection,
        Book: Book(connection)
    };
};

module.exports['@require'] = [
    'sequelize',
    'config',
    'lib/data/models/Book'
];