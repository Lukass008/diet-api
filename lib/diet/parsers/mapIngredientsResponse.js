const _ = require('lodash')

function mapIngredients (data) {
  const name = _.get(data, 'report.foods[0].name')
  const id = _.get(data, 'report.foods[0].ndbno')
  const weight = _.get(data, 'report.foods[0].weight')
  const nutrients = _.map(_.get(data, 'report.foods[0].nutrients'), (nutrient) => {
    return _.pick(nutrient, ['nutrient', 'unit', 'value'])
  })

  return [{
    id,
    name,
    unit: 'g',
    weight
  }]
}

module.exports = mapIngredients
