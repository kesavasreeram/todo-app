'use strict'

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    // title: DataTypes.STRING  <-- one way of defining the columns within the table
    title: { // this is another way of defining the columns where we can add more details to the columns
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {})

  // define all relations here
  Todo.associate = (models) => {
    // associations can be defined here
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todo'
    })
  }

  return Todo
}
