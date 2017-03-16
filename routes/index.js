const express = require('express')
const router = express.Router()
const diet = require('./diet')
const addNewUser = require('../lib/diet/user/addNewUser')
const userModel = require('../lib/diet/models/mongoose/user.mongoose.model.js')
const authenticateuser = require('../lib/diet/user/authenticate')
const checkJWT = require('../lib/diet/user/authenticateJWT')

router.use('/authenticate', authenticateuser)

router.use('/adduser', addNewUser)

// authenticate with accessToken
// all before this don't need authentication
router.use(checkJWT)

router.use('/diet', diet)

router.use('/users', (req, res) => {
  userModel.find({}, (err, user) => {
    if (err) throw err
    res.json(user)
  })
})

module.exports = router

