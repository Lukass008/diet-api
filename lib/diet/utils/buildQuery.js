const URI = require('urijs')

function buildQuery (domain, directory, queryObj, addQueryString) {
  let url = URI(domain)
        .directory(directory)
        .query(queryObj)
        .toString()
  url += addQueryString
  return url
}

module.exports = buildQuery
