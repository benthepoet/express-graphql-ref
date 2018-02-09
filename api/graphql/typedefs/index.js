module.exports = `
    type Book {
        id: Int!
        name: String!
        chapters: [Chapter]
    }
    
    type Chapter {
        id: Int!
        verses: [Verse]
    }
    
    type Verse {
        id: Int!
    }
    
    type Query {
        book(id: Int!): Book
        books: [Book]
    }
`;
