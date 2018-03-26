'use strict'

module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {})

  // define all relations here
  todo.associate = (models) => {
    // associations can be defined here
    todo.hasMany(models.todoitem, {
      foreignKey: 'todoid',
      sourceKey: 'id',
      as: 'todoItems'  // this should match the alias you are providing
    })
  }

  return todo
}
