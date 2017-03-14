const graphql = require('graphql')
const bodyDetailsModel = require('./body-details.model')

const detailsModel = new graphql.GraphQLObjectType({
  name: 'Details_model',
  fields: (_) => ({
    growth: {
      type: new graphql.GraphQLObjectType({
        name: 'user_growth',
        fields: {
          value: {
            type: graphql.GraphQLInt,
            description: 'value of growth',
            resolve (_) {
              return _.value
            }
          },
          unit: {
            type: graphql.GraphQLString,
            description: 'unit of growth',
            resolve (_) {
              return _.unit
            }
          }
        }
      }),
      description: 'growth',
      resolve (_) {
        return _.growth
      }
    },
    gender: {
      type: graphql.GraphQLString,
      description: 'gender of user',
      resolve (_) {
        return _.gender
      }
    },
    bodyDetails: {
      type: new graphql.GraphQLList(bodyDetailsModel),
      description: 'user body details',
      resolve (_) {
        return _.bodyDetails
      }
    }
  })
})

module.exports = detailsModel
