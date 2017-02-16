const graphql = require('graphql')
const ingredientsModel = require('./ingredients.model.js')
const getIngredients = require('../../providers/getIngredientsUSDA')

const ingredientsQuery = {
    type: new graphql.GraphQLList(ingredientsModel),
    args: {
        id: {
            type: graphql.GraphQLInt,
        }
    },
    resolve (_, args) {
        return getIngredients(args.id)

    }
}

module.exports = ingredientsQuery