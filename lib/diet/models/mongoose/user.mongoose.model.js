const mongoose = require('mongoose')
// const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  admin: Boolean,
  name: String,
  surname: String,
  nick: String,
  country: String,
  city: String,
  born: Date,
  details: {
    growth: {
      value: Number,
      unit: {type: String, default: 'cm'}
    },
    gender: String,
    bodyDetails: [
      {
        date: {type: Date, default: Date.now},
        unit: {type: String, default: 'kg'},
        weight: Number,
        fatMass: Number,
        fatPercent: Number,
        muscleMass: Number,
        musclePercent: Number
      }
    ],
    objectives: [
      {
        date: {type: Date, default: Date.now},
        targetDate: Date,
        weight: Number,
        fatMass: Number,
        fatPercent: Number,
        muscleMass: Number,
        musclePercent: Number
      }
    ]
  },
  diets: [
    {
      id: Number,
      startDate: {type: Date, default: Date.now},
      endDate: {type: Date, default: Date.now}
    }
  ],
  media: {
    profilePhoto: String,
    progressPhotos: [
      {
        date: {type: Date, default: Date.now},
        photo: String
      }
    ]
  }
})

module.exports = mongoose.model('user', userSchema)
