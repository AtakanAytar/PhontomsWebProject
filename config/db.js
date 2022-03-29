let DB_CONNECTION = "mongodb+srv://atakan:sHzHFyA0TP6M9g3E@cluster0.ay2xc.mongodb.net/incidentResponse"

// Database Setup
let mongoose = require('mongoose');

module.exports = function(){  

    // Connect to the DB
    mongoose.connect(DB_CONNECTION);

    let mongoDB = mongoose.connection;

    mongoDB.on('error', console.error.bind(console, 'Connection Error: '));
    mongoDB.once('open', ()=>{
        console.log('Connected to MongoDB...');
    })

    return mongoDB;
}
