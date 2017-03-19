// LIBS
const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./config')

// ROUTER
const router = require('./routes/index')

let app = express()

mongoose.connect(config.db.url, config.db.options)
const conn = mongoose.connection
conn.on('error', console.error.bind(console, 'connection error:'))

app.use(helmet())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// CORS
app.use(cors())

app.use('/api', router)

app.listen(8080, function () {
  console.log('server is listening on 8080...')
})

