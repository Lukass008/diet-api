/**
 * Created by ukasz on 14.11.16.
 */
// LIBS
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// ROUTER
const router = require('./routes/index')

let app = express()

// MongoDB connection
mongoose.connect('mongodb://public:asd123@ds159517.mlab.com:59517/diet_api');


app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

let server = app.listen(3000, function() {
    console.log('server is listening on 3000...')
})


