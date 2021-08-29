const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.role, {
        through: "user_roles",
        foreignKey: "userId",
        otherKey: "roleId"
      });
    }
  }
  User.init({
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};