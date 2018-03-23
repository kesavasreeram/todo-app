'use strict'

const addHeaderToResponse = (headers, routes) => {
  return (request, response, next) => {
    if ((typeof routes === 'undefined' || routes.includes(request.route)) && typeof headers !== 'undefined') {
      response.set(headers)
    }

    next()
  }
}

const removeHeadersFromResponse = (headers, routes) => {
  return (request, response, next) => {
    if ((typeof routes === 'undefined' || routes.includes(request.route)) && typeof headers !== 'undefined') {
      for (var header of headers) {
        response.removeHeader(header)
      }
    }

    next()
  }
}

module.exports = {
  addHeaderToResponse,
  removeHeadersFromResponse
}
