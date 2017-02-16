const graphqlHTTP = require('express-graphql')

const dietIndexModel = require('./models/diet.query.js')

function dietGraphql () {
    return graphqlHTTP((req) => ({
            schema: dietIndexModel,
            pretty: true,
            graphiql: true
    }))
}

module.exports = dietGraphql
