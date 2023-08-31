/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     *
     */
    await queryInterface.bulkInsert(
      'Timings',
      [
        {
          name: 'надуть шары',
          start: '13.00',
          finish: '15.00',
          place: 'холл',
          comment: 'хорошо надуть ',
          eventId: 1,
          responsibleId: 1,
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
     */
    await queryInterface.bulkDelete('Timings', null, {});
  },
};
