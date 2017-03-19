const jwt = require('jsonwebtoken')
const config = require('../../../config')

const { secret } = config.security.jwt

module.exports = (req, res, next) => {
  // check header or url parameters or post parameters for token
  const token = req.body.token || req.query.token || req.headers['x-access-token']

  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(403).json({ success: false, message: 'Authentication failed1111' })
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded
        next()
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'Authentication failed'
    })
  }
}
