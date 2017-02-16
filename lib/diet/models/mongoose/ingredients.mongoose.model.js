const mongoose = require('mongoose')

const ingredientSchema = mongoose.Schema({
  id: Number,
  name: String,
  type: String,
  unit: String

})

const ingredientModel = mongoose.model('ingredients', ingredientSchema)

module.exports = ingredientModel
