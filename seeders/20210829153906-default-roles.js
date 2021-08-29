module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        roleId: 1,
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 2,
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