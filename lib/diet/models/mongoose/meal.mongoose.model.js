const mongoose = require('mongoose')

const mealSchema = mongoose.Schema({
  id: Number,
  type: String,
  name: String,
  description: String,
  calories: Number,
  nutrients: {
    carbohydrates: Number,
    proteins: Number,
    fats: Number
  },
  recipe: {
    ingredients: [
      {
        id: Number,
        name: String,
        unit: String,
        amount: Number
      }
    ],
    spices: [
      {
        id: Number,
        name: String
      }
    ],
    preparation: [
      {
        stageId: Number,
        stageName: String,
        description: String
      }
    ]
  },
  media: {
    photoUrl: String
  }
})

const mealModel = mongoose.model('meals', mealSchema)

module.exports = mealModel
