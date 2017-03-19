const graphql = require('graphql')

const mediaModel = new graphql.GraphQLObjectType({
  name: 'user_media_model',
  fields: (_) => ({
    profilePhoto: {
      type: graphql.GraphQLString,
      description: 'user profile photo',
      resolve (_) {
        return _.profilePhoto
      }
    },
    thumbnail: {
      type: graphql.GraphQLString,
      description: 'user photo thumbnail',
      resolve (_) {
        return _.thumbnail
      }
    },
    progressPhotos: {
      type: new graphql.GraphQLList(new graphql.GraphQLObjectType({
        name: 'progress_photo_model',
        fields: (_) => ({
          date: {
            type: graphql.GraphQLString,
            description: 'photo date',
            resolve (_) {
              return _.date
            }
          },
          photo: {
            type: graphql.GraphQLString,
            description: 'photo url',
            resolve (_) {
              return _.photo
            }
          }
        })
      })),
      resolve (_) {
        return _.progressPhotos
      }
    }
  })
})

module.exports = mediaModel
