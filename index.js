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
const {mongoUrl} = require('./config/database')

let app = express()

// MongoDB connection
// mongoose.connect(mongoUrl, {
//   server: {
//     socketOptions: {
//       socketTimeoutMS: 0,
//       connectionTimeout: 0
//     }
//   }
// })

const options = {
  server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
  replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}}
}

mongoose.connect(mongoUrl, options);
let conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function () {
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

  app.listen(8080, function () {
    console.log('server is listening on 8080...')
  })

})

