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
      'Events',
      [
        {
          name: 'Свадьба Ивановых',
          date: '11.11.2023',
          comment: 'Бухарезики',
        },
        {
          name: 'Свадьба Петровых',
          date: '11.12.2023',
          comment: 'Норм чуваки',
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
    await queryInterface.bulkDelete('Events', null, {});
  },
};
