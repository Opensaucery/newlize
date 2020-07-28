const mongoose = require('mongoose')

const cloudinary = require('cloudinary')

const writingSchema = new mongoose.Schema({
    headline: {
        type: String,
        
    },
    description: {
        type: String,
    },
    writingURL: {
        type: String,
    },
    writingImageName: {
        type: String
    },
    writingFormat: {
        type: String
    },
    sourceType: {
        type: String,
        
    }
})




module.exports = mongoose.model('Writing', writingSchema)