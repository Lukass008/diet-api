const graphql = require('graphql')

const ingredientsModel = new graphql.GraphQLObjectType({
    name: 'List_of_ingredients',
    fields: () => ({
        id: {
            type: graphql.GraphQLInt,
            description: 'id of ingredient',
            resolve (_) {
                return _.id
            }
        },
        name: {
            type: graphql.GraphQLString,
            description: 'name of ingredient',
            resolve (_) {
                return _.name
            }
        },
        unit: {
            type: graphql.GraphQLString,
            description: 'Unit of ingredient',
            resolve (_) {
                return _.unit
            }
        },
        amount: {
            type: graphql.GraphQLInt,
            description: 'Weight of ingredient',
            resolve (_) {
                return _.weight
            }
        }

    })
})

module.exports = ingredientsModel