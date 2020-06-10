const express = require('express')
const router = express.Router()
const Writing = require('../models/writing')

router.get('/', async (req, res) => {
    let writings
    try {
      writings = await Writing.find({ sourceType: 'Theatre' }).exec()
        
    } catch {
      writings = []    
    }
    res.render('index', { writings: writings })
   
})

module.exports = router