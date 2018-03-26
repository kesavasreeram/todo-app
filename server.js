'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// for logging
const morgan = require('morgan')
const routes = require('./src/server/routes')

// in a way to define middleware for the application.
// in this case, we are adding some information to the request.
app.use((request, response, next) => {
  request.user = { name: 'Kesava'}
  next()
})

// configure logging middleware to log http traffic
app.use(morgan('combined'))

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Require our routes into the application.
routes(app)

app.get('/', (request, response) => {
  response.send({
    message: 'Welcome to my API!'
  })
})

module.exports = app
