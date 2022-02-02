module.exports = (sequelize, DataTypes) => {
    const alias = 'Operation'
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      operation_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      concept: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }
  
    const config = {
      tableName: 'operations',
      timestamps: true
    }
  
    const Operation = sequelize.define(alias, cols, config)
  
    Operation.associate = models => {
      Operation.belongsTo(models.Categories, {
        as: 'categories',
        foreignKey: 'category_id'
      })
      Operation.belongsTo(models.Users, {
        as: 'users',
        foreignKey: 'user_id'
      })
    }
    return Operation
  }
  