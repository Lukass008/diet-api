const mongoose = require('mongoose')

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
    ]
  },
  diets: [
    {
      id: Number,
      startDate: {type: Date, default: Date.now},
      endDate: {type: Date, default: Date.now}
    }
  ],
  objectives: [
    {
      date: {type: Date, default: Date.now},
      targetDate: Date,
      unit: {type: String, default: 'kg'},
      weight: Number,
      fatMass: Number,
      fatPercent: Number,
      muscleMass: Number,
      musclePercent: Number
    }
  ],
  media: {
    profilePhoto: String,
    thumbnail: String,
    progressPhotos: [
      {
        date: {type: Date, default: Date.now},
        photo: String
      }
    ]
  }
})

module.exports = mongoose.model('user', userSchema)
