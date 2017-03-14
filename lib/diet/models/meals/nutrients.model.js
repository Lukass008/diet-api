const graphql = require('graphql')

const nutrientsModel = new graphql.GraphQLObjectType({
  name: 'Nutrients_model',
  fields: (_) => ({
    carbohydrates: {
      type: graphql.GraphQLInt,
      description: 'amount of carbohydrates',
      resolve (_) {
        return _.carbohydrates
      }
    },
    proteins: {
      type: graphql.GraphQLInt,
      description: 'amount of proteins',
      resolve (_) {
        return _.proteins
      }
    },
    fats: {
      type: graphql.GraphQLInt,
      description: 'amount of fats',
      resolve (_) {
        return _.fats
      }
    }
  })
})

module.exports = nutrientsModel
