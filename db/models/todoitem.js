'use strict'

module.exports = (sequelize, DataTypes) => {
  const todoitem = sequelize.define('todoitem', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {})

  todoitem.associate = (models) =>{
    // associations can be defined here
    todoitem.belongsTo(models.todo, {
      foreignKey: 'todoid',
      targetKey: 'id',
      onDelete: 'CASCADE'
    })
  }

  return todoitem
}
