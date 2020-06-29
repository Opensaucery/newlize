const mongoose = require('mongoose')
//const path = require('path')

// // from cloudinary tutorial
// const cloudinary = require('cloudinary')
// //const Model = require('./model')
// cloudinary.config({
//     cloud_name: 'dmupfimgd',
//     api_key: '565397811148476',
//     api_secret: 'PejFw41NXChTap4-tce3KZecnpw'
// })



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



module.exports = mongoose.model('Writing', writingSchema)
// module.exports = {
//     new: function (req, res) {
//         res.render('writings/new');
//     },
//     create: function (req, res) {

// cloudinary.uploader.upload(req.files.image.path,
// function(result) {
//             var post = new Model({
//                 headline: req.body.headline,
//                 description: req.body.description,
//                 writingURL: req.body.writingURL,
//                 writingImageName: result.url,
//                 image_id: result.public_id,
//                 sourceType: req.body.sourceType
//                  image: red.body.image
//             })
//             post.save(function (err) {
//                 if(err){
//                     res.send(err)
//                 }
//                 res.redirect('/')
//             })
//         })
//     }
// }