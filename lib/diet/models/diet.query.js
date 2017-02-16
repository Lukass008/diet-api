const graphql = require('graphql')

const mealsQuery = require('./meals/meals.query.js')
const ingredientsQuery = require('./ingredients/ingredients.query.js')
const createMealMutation = require('./meals/create-meal.mutation.js')

const indexModel = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            meals: mealsQuery,
            ingredients: ingredientsQuery
        }
    }),
    mutation: new graphql.GraphQLObjectType({
        name: 'RootMutation',
        fields: {
            createMeal: createMealMutation
        }
    })
})

module.exports = indexModel