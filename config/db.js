let config = require('./config')
    // Database Setup
let mongoose = require('mongoose');

module.exports = function() {

    // Connect to the DB
    mongoose.connect(config.ATLASDB);

    let mongoDB = mongoose.connection;

    mongoDB.on('error', console.error.bind(console, 'Connection Error: '));
    mongoDB.once('open', () => {
        console.log('Connected to MongoDB...');
    })

    return mongoDB;
}