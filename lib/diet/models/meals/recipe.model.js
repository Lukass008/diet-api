const graphql = require('graphql')
const ingredientsModel = require('./../ingredients/ingredients.model.js')
const spicesModel = require('./spices.model.js')
const preparationModel = require('./preparation.model.js')

const recipeModel = new graphql.GraphQLObjectType({
  name: 'recipe_model',
  fields: () => ({
    ingredients: {
      type: new graphql.GraphQLList(ingredientsModel),
      description: 'List of ingredients',
      resolve (_) {
        return _.ingredients
      }
    },
    spices: {
      type: new graphql.GraphQLList(spicesModel),
      description: 'List of spices',
      resolve (_) {
        return _.spices
      }
    },
    preparation: {
      type: new graphql.GraphQLList(preparationModel),
      description: 'Preparation steps',
      resolve (_) {
        return _.preparation
      }
    }
  })
})

module.exports = recipeModel
