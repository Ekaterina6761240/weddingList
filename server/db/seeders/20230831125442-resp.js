/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Responsibles',
      [
        {
          name: 'Настя',
          surname: 'Зайкова',
          role: 'Главный организатор',
        },
        {
          name: 'Лизка',
          surname: 'Попкина',
          role: 'Официант',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
    await queryInterface.bulkDelete('Responsibles', null, {});
  },
};
