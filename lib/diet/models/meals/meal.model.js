const graphql = require('graphql')
const nutrientsModel = require('./nutrients.model.js')
const recipeModel = require('./recipe.model.js')

const mealModel = new graphql.GraphQLObjectType({
  name: 'Meal_model',
  fields: {
    id: {
      type: graphql.GraphQLInt,
      description: 'unique id of meals',
      resolve (_) {
        return `${_.id}`
      }
    },
    type: {
      type: graphql.GraphQLString,
      description: 'type of meals',
      resolve (_) {
        return `${_.type}`
      }
    },
    name: {
      type: graphql.GraphQLString,
      description: 'name',
      resolve (_) {
        return `${_.name}`
      }
    },
    description: {
      type: graphql.GraphQLString,
      description: 'short description',
      resolve (_) {
        return `${_.description}`
      }
    },
    calories: {
      type: graphql.GraphQLInt,
      description: 'amount of calories',
      resolve (_) {
        return `${_.calories}`
      }
    },
    nutrients: {
      type: nutrientsModel,
      description: 'nutrients in meals',
      resolve (_) {
        return _.nutrients
      }
    },
    recipe: {
      type: recipeModel,
      description: 'recipe, how to prepare',
      resolve (_) {
        return _.recipe
      }
    },
    media: {
      type: new graphql.GraphQLObjectType({
        name: 'media_model',
        fields: () => ({
          photoUrl: {
            type: graphql.GraphQLString,
            description: 'unique id of meals',
            resolve (_) {
              return _.photoUrl
            }
          }
        })
      }),
      description: 'media, photos',
      resolve (_) {
        return _.media
      }
    }
  }

})

module.exports = mealModel
