const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: "user_role_mapping",
        foreignKey: "roleId",
        otherKey: "userId"
      });
    }
  }
  Role.init({
    roleId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role'
  });
  return Role;
};