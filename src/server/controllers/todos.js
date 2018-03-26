const todo = require('../../../db/models').todo

module.exports = {
  // This create function is designed to be a route handler for whichever Express route
  // we'll choose to attach it to. The req parameter is the incoming request from the
  // client. The res parameter is the response we're preparing to eventually send back
  // to the client in response to their request :). All Express route handlers follow
  // this method signature. We can have a third parameter, conventionally named next,
  // which is a function that passes the request on to the next route handler (meaning
  // that a route can be handled by multiple route handlers, in which case it's piped
  // or passed along all of those route handlers).
  create(reqest, response) {
    return todo
      .create({
        title: reqest.body.title
      })
      .then(todo => response.status(201).send(todo))
      .catch(error => response.status(400).send(error))
  },
  findAll(request, response) {
    return todo.all()
      .then(todos => response.status(200).send(todos))
      .catch(error => response.status(400).send(error))
  },
  findOne(request, response) {
    return todo.findById(reqest.params.id)
      .then(todo => response.status(200).send(todo))
      .catch(error => response.status(400).send(error))
  }
}
