const { v4: uuidv4 } = require('uuid');

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        roleId: uuidv4(),
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: uuidv4(),
        name: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }

};