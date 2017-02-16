const express = require('express')
const router = express.Router()
const diet = require('./diet')

router.use('/diet/api', diet)


module.exports = router

