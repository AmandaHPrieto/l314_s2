module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstname: 'John',
        lastname: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Jane',
        lastname: 'Smith',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Amanda',
        lastname: 'Héry-Prieto',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
