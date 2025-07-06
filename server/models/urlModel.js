const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    shortId: { 
        type: String, 
        required: true 
    },
    redirectUrl: { 
        type: String,
        required: true 
    },
    qrCode: {
        type: String, 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    numberOfClicks: { 
        type: Number, 
        default: 0 
    },
    visitorDetails: { 
        type: [ {
            ipAddress: String, 
            time: String, 
            date: Date,
            country: String, 
            city: String
        } ]
    }
});


module.exports = mongoose.model('urlModel', urlSchema);