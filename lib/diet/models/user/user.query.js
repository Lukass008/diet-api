// LIBS
const graphql = require('graphql')

// MODELS
const userModel = require('./user.model.js')
const userMongooseModel = require('./../mongoose/user.mongoose.model')

const userQuery = {
  type: userModel,
  args: {
    id: {
      type: graphql.GraphQLInt
    }
  },
  resolve (_, args) {
    // TODO: dynamic find user
    return userMongooseModel.findOne({email: 'lukasz@colortv.com'})
  }
}

module.exports = userQuery
