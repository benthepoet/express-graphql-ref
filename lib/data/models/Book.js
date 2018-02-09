module.exports = (Sequelize) => {
    return (connection) => {
        return connection.define('book', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: Sequelize.STRING
        });
    };
};

module.exports['@require'] = [
    'sequelize'
];