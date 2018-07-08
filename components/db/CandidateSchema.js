var mongoose = require('mongoose');

var candidateSchema = mongoose.Schema({
    contest: {
        type: String
    },
    district: {
        type: String
    },
    name: {
        type: String
    },
    residence: {
        type: String
    },
    party: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: Number
    },
    dayPhone: {
        type: String
    },
    evePhone: {
        type: String
    },
    email: {
        type: String
    },
    website: {
        type: String
    },
    financial: {
        type: String
    },
    1040: {
        type: String
    }         
},{
    strict: false
});

var Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;