// LIBS
const graphql = require('graphql')

// MODELS
const mealModel = require('./meal.model.js')
const mealMongooseModel = require('./../mongoose/meal.mongoose.model.js')

const mealQuery = {
  type: new graphql.GraphQLList(mealModel),
  args: {
    id: {
      type: graphql.GraphQLInt
    }
  },
  resolve (_, args) {
    return mealMongooseModel.find({id: args.id})
  }
}

module.exports = mealQuery
