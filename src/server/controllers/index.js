// Here we will list all the controllers and export them
// It helps in consolidating all controllers in one place.

const todos = require('./todos')
const todoitems = require('./todoitems')

module.exports = {
  todos,
  todoitems
}
