// NPM modules
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

// Local modules
const api = require('./api');

// Create the application
const app = express();

// Setup middleware
app.use(cors());

// Setup API
app.use(api());

// Start the application
app.listen(process.env.PORT || 8080, () => {
    console.log('API ready');
});