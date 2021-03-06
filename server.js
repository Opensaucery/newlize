if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    const cloudinary = require('cloudinary').v2
    cloudinary.config({ cloud_name: process.env.CLOUD_NAME })
}
 

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const bcrypt = require('bcrypt')

const loginRouter = require('./routes/login')
const theatreRouter = require('./routes/theatre')
const writingRouter = require('./routes/writings')
const otherRouter = require('./routes/other')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

let DATABASE_URL = `mongodb+srv://eliza:YaanYmX8baXC04fr@testcluster1-jsvi3.gcp.mongodb.net/test`
const mongoose = require('mongoose')
mongoose.connect(DATABASE_URL, { useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose')) 

app.use('/login', loginRouter)
app.use('/theatre', theatreRouter)
app.use('/writings', writingRouter)
app.use('/other', otherRouter)

app.listen(process.env.PORT || 8080)