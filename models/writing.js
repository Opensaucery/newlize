const mongoose = require('mongoose')
const path = require('path')

const writingImageBasePath = 'uploads/linkImages'

const writingSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true 
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
    sourceType: {
        type: String,
        
    }
})

writingSchema.virtual('writingImagePath').get(function() {
    if (this.writingImageName != null) {
    return path.join('/', writingImageBasePath, this.writingImageName)
    }
})

module.exports = mongoose.model('Writing', writingSchema)
module.exports.writingImageBasePath = writingImageBasePath