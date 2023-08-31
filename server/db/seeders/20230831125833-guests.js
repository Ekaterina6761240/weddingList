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
      'Guests',
      [
        {
          name: 'Петр',
          surname: 'Петров',
          patronymic: 'Петрович',
          role: 'Отец',
          side: 'Жених',
          presence: false,
          comment: 'DataTypes.TEXT',
          eventId: 1,
          tableId: 2,
        },
        {
          name: 'Иван',
          surname: 'Петров',
          patronymic: 'Петрович',
          role: 'Брат',
          side: 'Невеста',
          presence: true,
          comment: 'DataTypes.TEXT',
          eventId: 1,
          tableId: 1,
        },
        {
          name: 'Анна',
          surname: 'Иванова',
          patronymic: 'Ивановна',
          role: 'Мать',
          side: 'Жених',
          presence: true,
          comment: 'DataTypes.TEXT',
          eventId: 1,
          tableId: 1,
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Guests', null, {});
  },
};
