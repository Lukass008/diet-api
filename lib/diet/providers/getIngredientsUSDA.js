const request = require('../utils/request')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const mapIngredientsResponse = require('../parsers/mapIngredientsResponse')

const buildQuery = require('../utils/buildQuery')

let xhr = new XMLHttpRequest()

function getIngredients (id) {
    return new Promise((resolve, reject) => {
        const domain = 'http://api.nal.usda.gov/'
        const directory = 'ndb/nutrients/'
        const query = {
            format:'json',
            api_key: 'qEPoIp7alSxnI6fML8Mlu8isEvpJMTqUAOLD4ywS',
            ndbno:45055249
        }
        const nutrientsIds = [
            255,
            208,
            203,
            204,
            205,
            269,
        ]

        let nutrientsQueryString = ''
        nutrientsIds.forEach(id => nutrientsQueryString += `&nutrients=${id}`)

        const url = buildQuery(domain, directory, query, nutrientsQueryString)
        xhr.abort()
        let params = {
            request: xhr,
            type: 'GET',
            url
        }

        request(params)
            .then((data) => {
                resolve(mapIngredientsResponse(data))
            })
            .catch(reject)
    })
}

module.exports = getIngredients