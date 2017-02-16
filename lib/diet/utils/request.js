function request (params) {
  return new Promise((resolve, reject) => {
    let { request, type, url, data, doNotParse, setHeaders } = params
        // open connection
    request.open(type, url, true)
    if (setHeaders && request.setRequestHeader) {
      request.setRequestHeader('Content-Type', 'application/json')
    }

        // onload
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
                // if we dont want to parse
        if (doNotParse) { return resolve(request.responseText) }
                // if we want JSON.parse
        resolve(JSON.parse(request.responseText))
      } else {
        reject({ status: request.status, data: request.responseText })
      }
    }

        // on error
    request.onerror = function () {
      reject({ status: 'unable to connect', data: {} })
    }

        // start connection
    request.send(JSON.stringify(data))
  })
}

module.exports = request
