const todoitem = require('../../../db/models').todoitem

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
    return todoitem
      .create({
        content: reqest.body.content,
        todoid: reqest.params.todoId
      })
      .then(todoitem => {response.status(201).send(todoitem)})
      .catch(error => {
        console.log('Error Occurred', error)
        response.status(400).send(error)
      })
  },
  findAll(request, response) {
    return todoitem.all()
      .then(todoitems => response.status(200).send(todoitems))
      .catch(error => response.status(400).send(error))
  },
  findOne(request, response) {
    return todoitem.findById(reqest.params.id)
      .then(todoitem => response.status(200).send(todoitem))
      .catch(error => response.status(400).send(error))
  }
}
