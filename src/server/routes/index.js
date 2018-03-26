const todoController = require('../controllers').todos
const todoitemController = require('../controllers').todoitems

module.exports = (app) => {
  app.get('/api/todos/total', todoController.findAllWithChildren)
  app.get('/api/todos', todoController.findAll)
  app.get('/api/todos/:id', todoController.findOne)
  app.post('/api/todos', todoController.create)

  app.get('/api/todoitems', todoitemController.findAll)
  app.get('/api/todoitems/:id', todoitemController.findOne)
  app.post('/api/todos/:todoId/items', todoitemController.create)
}
