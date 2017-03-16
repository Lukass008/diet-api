const graphql = require('graphql')

const bodyDetailsModel = new graphql.GraphQLObjectType({
  name: 'body_details_model',
  fields: (_) => ({
    date: {
      type: graphql.GraphQLString,
      description: 'date of update',
      resolve (_) {
        return _.date
      }
    },
    unit: {
      type: graphql.GraphQLString,
      description: 'unit of weight',
      resolve (_) {
        return _.unit
      }
    },
    weight: {
      type: graphql.GraphQLString,
      description: 'user weight',
      resolve (_) {
        return _.weight
      }
    },
    fatMass: {
      type: graphql.GraphQLInt,
      description: 'user fatMass',
      resolve (_) {
        return _.fatMass
      }
    },
    fatPercent: {
      type: graphql.GraphQLInt,
      description: 'user fatPercent',
      resolve (_) {
        return _.fatPercent
      }
    },
    muscleMass: {
      type: graphql.GraphQLInt,
      description: 'user muscleMass',
      resolve (_) {
        return _.muscleMass
      }
    },
    musclePercent: {
      type: graphql.GraphQLInt,
      description: 'user musclePercent',
      resolve (_) {
        return _.musclePercent
      }
    }

  })
})

module.exports = bodyDetailsModel
