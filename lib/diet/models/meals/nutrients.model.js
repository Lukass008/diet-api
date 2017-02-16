const graphql = require('graphql')

const nutrientsModel = new graphql.GraphQLObjectType({
  name: 'Nutrients_model',
  fields: () => ({
    carbohydrates: {
      type: graphql.GraphQLFloat,
            // type: new graphql.GraphQLObjectType ({
            //     name: 'carbohydrates_model',
            //     fields: () => ({
            //         simple: {
            //             type: graphql.GraphQLFloat,
            //             description: 'amount of simple carbohydrates',
            //             resolve (_) {
            //                 return _.simple
            //             }
            //         },
            //         complex: {
            //             type: graphql.GraphQLFloat,
            //             description: 'amount of complex carbohydrates',
            //             resolve (_) {
            //                 return _.complex
            //             }
            //         }
            //     })
            // }),
      description: 'amount of carbohydrates',
      resolve (_) {
        return _.carbohydrates
      }
    },
    proteins: {
      type: graphql.GraphQLFloat,
      description: 'amount of proteins',
      resolve (_) {
        return _.proteins
      }
    },
    fats: {
      type: graphql.GraphQLFloat,
      description: 'amount of fats',
      resolve (_) {
        return _.fats
      }
    }
  })
})

module.exports = nutrientsModel
