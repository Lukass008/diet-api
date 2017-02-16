// LIBS
const graphql = require('graphql')

// MODELS
const mealMongooseModel = require('../mongoose/meal.mongoose.model.js')
const mealModel = require('./meal.model.js')

module.exports = {
    name: 'create_new_meal',
    type: mealModel,
    description: 'Create new meal',
    args: {
        id: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
        },
        name: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        type: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        description: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
        calories: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
        },
        nutrients: {
            type: new graphql.GraphQLInputObjectType({
                name: 'Nutrients_object',
                fields: {
                    carbohydrates: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                    },
                    proteins: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                    },
                    fats: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                    }
                }
            })

        },
        recipe: {
            type: new graphql.GraphQLInputObjectType({
                name: 'meal_recipe',
                fields: {
                    ingredients: {
                        type: new graphql.GraphQLList(
                            new graphql.GraphQLInputObjectType({
                                name: 'ingredient_object',
                                fields: {
                                    id: {
                                        type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                                    },
                                    name: {
                                        type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                                    },
                                    unit: {
                                        type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                                    },
                                    amount: {
                                        type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                                    }
                                }
                            })
                        )
                    },
                    spices: {
                        type: new graphql.GraphQLList(
                            new graphql.GraphQLInputObjectType({
                                name: 'spices_object',
                                fields: {
                                    id: {
                                        type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                                    },
                                    name: {
                                        type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                                    }
                                }
                            })
                        )
                    },
                    preparation: {
                        type: new graphql.GraphQLList(
                            new graphql.GraphQLInputObjectType({
                                name: 'preparation_object',
                                fields: {
                                    stageId: {
                                        type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                                    },
                                    stageName: {
                                        type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                                    },
                                    description: {
                                        type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                                    }
                                }
                            })
                        )
                    }
                }
            })
        },
        media: {
            type: new graphql.GraphQLInputObjectType({
                name: 'media_object',
                fields: {
                    photoUrl: {
                        type: new graphql.GraphQLNonNull(graphql.GraphQLString)
                    }
                }
            })
        }
    },
    resolve(_, args) {
        const schema = mealMongooseModel
        return schema.create(args)
    }
}