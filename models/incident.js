let mongoose = require('mongoose');

// Create a model class
let incidentModel = mongoose.Schema(
    {
        IncidentExplanation: String,
        User: String,
        Department: String,
        Solved: String
    },
    {
        collection: "incidents"
    }
);

module.exports = mongoose.model('incidents', incidentModel);