const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: "user_role_mapping",
        foreignKey: "userId",
        otherKey: "roleId"
      });
    }
  }
  User.init({
    userId: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};