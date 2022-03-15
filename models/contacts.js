let mongoose = require('mongoose');

// Create a model class
let contactsModel = mongoose.Schema(
    {
        name: String,
        phone: Number,
        email: String
    },
    {
        collection: "buisnesscontact"
    }
);

module.exports = mongoose.model('buisnesscontact', contactsModel);