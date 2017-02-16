const graphql = require('graphql')

const preparationModel = new graphql.GraphQLObjectType({
  name: 'Preparation_of_meal',
  fields: () => ({
    stageId: {
      type: graphql.GraphQLInt,
      description: 'Id of preparation stage',
      resolve (_) {
        return _.stageId
      }
    },
    stageName: {
      type: graphql.GraphQLString,
      description: 'Name of stage',
      resolve (_) {
        return _.stageName
      }
    },
    description: {
      type: graphql.GraphQLString,
      description: 'Description of preparation',
      resolve (_) {
        return _.description
      }
    }
  })
})

module.exports = preparationModel
