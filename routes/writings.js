const express = require('express')
const router = express.Router()
const Writing = require('../models/writing')

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
router.post('/', async (req, res) => {
    const writing = new Writing({
        headline: req.body.headline
    })
    try {
        const newWriting = await writing.save()
        res.redirect('/writings')
        
    } catch {
        res.render('writings/new', {
            writing: writing,
            errorMessage: 'Error creating Writing' 
        })
    }   

})

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