// LIBS
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

// ROUTER
const router = require('./routes/index')

// CONFIG
const { mongoUrl } = require('./config/database')

let app = express()

// MongoDB connection
mongoose.connect(mongoUrl)

app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// CORS
app.use(cors())

// use morgan to log requests to the console
app.use(morgan('dev'))

app.use('/api', router)

app.listen(3000, function () {
  console.log('server is listening on 3000...')
})

