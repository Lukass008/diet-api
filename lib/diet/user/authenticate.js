const user = require('./../models/mongoose/user.mongoose.model.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../../../config')

const { secret, expireAfterSeconds } = config.security.jwt

const authenticateUser = (req, res) => {
  const { email, password } = req.body

  user.findOne({email}, (err, user) => {
    if (err) throw err

    if (!user) return res.json({error: 'wrong username or password'})

    bcrypt.compare(password, user.password).then((isValid) => {
      if (!isValid) {
        res.json({error: 'Wrong password'})
        res.end()
      } else {
        const token = jwt.sign(user, secret, {
          expiresIn: expireAfterSeconds
        })

        res.json({
          success: true,
          user: email,
          token
        })
      }
    })
  })
}

module.exports = authenticateUser
