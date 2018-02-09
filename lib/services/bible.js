module.exports = ({ Book }) => {
    return {
        getBook,
        getBooks
    };
    
    function getBook(id) {
        return Book.findById(id);
    }
    
    function getBooks() {
        return Book.findAll();
    }
};

module.exports['@require'] = [
    'lib/data/sequelize'
];