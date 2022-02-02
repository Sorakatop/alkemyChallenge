module.exports = (sequelize, DataTypes) => {
    const alias = 'Categories'
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      category_name: {
        type: DataTypes.STRING
      }
    }
    const config = {
      tableName: 'categories',
      timestamps: false
    }
    const Categories = sequelize.define(alias, cols, config)
    Categories.associate = models => {
      Categories.hasMany(models.Operation, {
        as: 'Operation',
        foreignKey: 'category_id'
      })
    }
    return Categories
  }
  