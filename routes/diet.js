const express = require('express')
const router = express.Router()

const dietGraphql = require('../lib/diet/diet.graphql')

router.use('/', dietGraphql())

module.exports = router
