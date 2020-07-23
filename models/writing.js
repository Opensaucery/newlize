const mongoose = require('mongoose')
//const path = require('path')


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

// module.exports = {
//     destroy: function (req, res) {
//         var imageId = req.body.image_id;
//         // The destroy method takes the image ID
//         // which we need to remove
//         cloudinary.v2.uploader.destroy(imageId)
//                 // We also delete this
//                 // image details from our database
//                 // Model.findOneAndRemove({ image_id: imageId }, function(err) {
//                 //     if (err) res.send(err);
    
//                 //     res.redirect('/');
//                 // });
//     //         });
//     }
// }


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