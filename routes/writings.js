const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const Writing = require('../models/writing')
const uploadPath = path.join('public', Writing.writingImageBasePath)
const imageMimeTypes = ['image/jpeg', 'image/png', 'image/gif']
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMimeTypes.includes(file.mimetype))
    }
})

// All Writings Route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.headline != null && req.query.headline !== '') {
        searchOptions.headline = new RegExp(req.query.headline, 'i')
    }
    try {
        const writings = await Writing.find(searchOptions)
        res.render('writings/index', {
            writings: writings,
            searchOptions: req.query 
        })
    } catch {
        res.redirect('/')
    }
})

// New Writing Route
router.get('/new', (req, res) => {
    res.render('writings/new', { writing: new Writing() })
})

// Create Writing Route
router.post('/', upload.single('linkImage'), async (req, res) => {
    const fileName = req.file != null ? req.file.filename : null
    const writing = new Writing({
        headline: req.body.headline,
        description: req.body.description,
        writingURL: req.body.writingURL,
        writingImageName: fileName,
        sourceType: req.body.sourceType 
    })
    try {
        const newWriting = await writing.save()
        res.redirect('/writings')
        
    } catch {
        if (writing.writingImageName != null) {
           removeLinkImage(writing.writingImageName)
        }
        res.render('writings/new', {
            writing: writing,
            errorMessage: 'Error creating Writing' 
        })
    }   

})

function removeLinkImage(fileName) {
    fs.unlink(path.join(uploadPath, fileName), err => {
    if (err) console.error(err)
    })
}

// router.get('/:id', (req, res) => {
//     res.send('Show Writing ' + req.params.id)
// })

router.get('/:id/edit', async (req, res) => {
    try {
        const writing = await Writing.findById(req.params.id)
        res.render('writings/edit', { writing: writing })
    
    } catch {
        res.redirect('/authors')
    }
})

router.put('/:id', async (req, res) => {
    let writing    
    try {
        writing = await Writing.findById(req.params.id)
        writing.headline = req.body.headline
        writing.description = req.body.description
        writing.writingURL = req.body.writingURL
        writing.sourceType = req.body.sourceType
        await writing.save()
        res.redirect('/writings')
        
    } catch {
        if (author == null) {
            res.redirect('/')
        } else {
            res.render('writings/edit', {
                writing: writing,
                errorMessage: 'Error updating Writing' 
            })
        }
    }
})

router.delete('/:id', async (req, res) => {
    let writing    
    try {
        writing = await Writing.findById(req.params.id)
        await writing.remove()
        res.redirect('/writings')
    } catch {
        if (author == null) {
            res.redirect('/')
        } else {
            res.redirect(`/writings/${writing.id}`)
        }
    }
})


module.exports = router