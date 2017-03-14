const graphql = require('graphql')

const dietsModel = new graphql.GraphQLObjectType({
  name: 'user_diet_model',
  fields: (_) => ({
    id: {
      type: graphql.GraphQLString,
      description: 'id of diet',
      resolve (_) {
        return _.id
      }
    },
    startDate: {
      type: graphql.GraphQLString,
      description: 'begining day of diet',
      resolve (_) {
        return _.startDate
      }
    },
    endDate: {
      type: graphql.GraphQLString,
      description: 'end day of diet',
      resolve (_) {
        return _.endDate
      }
    }
  })
})

module.exports = dietsModel
