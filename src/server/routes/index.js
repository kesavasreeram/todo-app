const todoController = require('../controllers').todos

module.exports = (app) => {
  app.get('/api/todos', todoController.findAll)
  app.get('/api/todos/:id', todoController.findOne)
  app.post('/api/todos', todoController.create)
}
