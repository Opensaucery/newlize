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
        // res.redirect(`writings/${newWriting.id}`)
        res.redirect(`writings`)
    } catch {
        res.render('writings/new', {
            writing: writing,
            errorMessage: 'Error creating Writing' 
        })
    }   

})

module.exports = router