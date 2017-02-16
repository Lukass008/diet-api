const graphql = require('graphql')

const spicesModel = new graphql.GraphQLObjectType({
  name: 'List_of_spices',
  fields: () => ({
    id: {
      type: graphql.GraphQLInt,
      description: 'id of spice',
      resolve (_) {
        return _.id
      }
    },
    name: {
      type: graphql.GraphQLString,
      description: 'name of spice',
      resolve (_) {
        return _.name
      }
    }
  })
})

module.exports = spicesModel
