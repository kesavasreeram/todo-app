'use strict'

module.exports = (sequelize, DataTypes) => {
  const todoitem = sequelize.define('todoitem', {
    content: {
      type: DataTypes.STRING

    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
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
