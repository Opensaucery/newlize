const mongoose = require('mongoose')

const writingSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true 
    }
})

module.exports = mongoose.model('Writing', writingSchema)