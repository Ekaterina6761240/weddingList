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
      'Tables',
      [
        {
          name: '1',
          place: 'у окна',
          coment: 'стол родителей',
          responsebleId: 1,
          eventId: 1,
        },
        {
          name: 'длинный',
          place: 'у окна',
          coment: 'стол подружек',
          responsebleId: 2,
          eventId: 1,
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
    await queryInterface.bulkDelete('Tables', null, {});
  },
};
