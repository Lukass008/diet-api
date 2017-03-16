const graphql = require('graphql')

const detailsModel = require('./details.model')
const dietsModel = require('./diets.model')
const objectivesModel = require('./objectives.model')
const mediaModel = require('./media.model')

const mealModel = new graphql.GraphQLObjectType({
  name: 'User_model',
  fields: {
    _id: {
      type: graphql.GraphQLString,
      description: 'unique id of user',
      resolve (_) {
        return `${_._id}`
      }
    },
    email: {
      type: graphql.GraphQLString,
      description: 'user email',
      resolve (_) {
        console.log('_', _)
        return `${_.email}`
      }
    },
    password: {
      type: graphql.GraphQLString,
      description: 'user password',
      resolve (_) {
        return `${_.password}`
      }
    },
    admin: {
      type: graphql.GraphQLBoolean,
      description: 'is user admin',
      resolve (_) {
        return `${_.admin}`
      }
    },
    name: {
      type: graphql.GraphQLString,
      description: 'first name',
      resolve (_) {
        return `${_.name}`
      }
    },
    surname: {
      type: graphql.GraphQLString,
      description: 'user surname',
      resolve (_) {
        return `${_.surname}`
      }
    },
    nick: {
      type: graphql.GraphQLString,
      description: 'user nick',
      resolve (_) {
        return `${_.nick}`
      }
    },
    country: {
      type: graphql.GraphQLString,
      description: 'user country',
      resolve (_) {
        return `${_.country}`
      }
    },
    city: {
      type: graphql.GraphQLString,
      description: 'user city',
      resolve (_) {
        return `${_.city}`
      }
    },
    born: {
      type: graphql.GraphQLString,
      description: 'date of birth',
      resolve (_) {
        return `${_.born}`
      }
    },
    details: {
      type: detailsModel,
      description: 'user details',
      resolve (_) {
        return _.details
      }
    },
    diets: {
      type: new graphql.GraphQLList(dietsModel),
      description: 'user diets',
      resolve (_) {
        return _.diets
      }
    },
    objectives: {
      type: new graphql.GraphQLList(objectivesModel),
      description: 'user objectives',
      resolve (_) {
        return _.objectives
      }
    },
    media: {
      type: mediaModel,
      description: 'media',
      resolve (_) {
        return _.media
      }
    }
  }
})

module.exports = mealModel
