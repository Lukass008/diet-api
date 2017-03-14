const graphql = require('graphql')

const ingredientsModel = new graphql.GraphQLObjectType({
  name: 'List_of_ingredients',
  fields: () => ({
    id: {
      type: graphql.GraphQLInt,
      description: 'id of ingredient',
      resolve (_) {
        return _.id || null
      }
    },
    name: {
      type: graphql.GraphQLString,
      description: 'name of ingredient',
      resolve (_) {
        console.log('_.name', _.name)
        return _.name
      }
    },
    unit: {
      type: graphql.GraphQLString,
      description: 'Unit of ingredient',
      resolve (_) {
        console.log('_.unit', _.unit)
        return _.unit
      }
    },
    amount: {
      type: graphql.GraphQLInt,
      description: 'Weight of ingredient',
      resolve (_) {
        return _.amount
      }
    }

  })
})

module.exports = ingredientsModel
