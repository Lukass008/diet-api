const userModel = require('./../models/mongoose/user.mongoose.model.js')
const bcrypt = require('bcrypt')

const addNewUser = (req, res) => {
  const {email, password, admin, name, surname} = req.body

  userModel.findOne({email}, (err, user) => {
    if (err) throw err
    if (user !== null) {
      res.json({error: 'User exists'})
      return
    }

    const saltRounds = 10

    // If all ok, create hash and save user in database
    bcrypt.hash(password, saltRounds).then((hash) => {
      userModel.create({email, password: hash, admin, name, surname})
        .then((user) => {
          res.json({success: true, user})
        })
        .catch((err) => {
          throw err
        })
    })
  })
}

module.exports = addNewUser
