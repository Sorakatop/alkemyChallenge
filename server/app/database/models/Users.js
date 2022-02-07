module.exports = (sequelize, DataTypes) => {
  const alias = 'Users'
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: {
          msg: "El nombre solo puede contener letras"
        },
        len: {
          args: [2, 255],
          msg: "El nombre tiene que ser minimamente de dos caracters"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "El email tiene que ser un correo valido"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: "La contraseña tiene que tener minimamente 6 caracteres"
        }
      }
    },
  }
  const config = {
    tableName: 'users',
    timestamps: false
  }
  const Users = sequelize.define(alias, cols, config)
  Users.associate = models => {
    Users.hasMany(models.Operation, {
      as: 'Operation',
      foreignKey: 'user_id'
    })
  }
  return Users
}
