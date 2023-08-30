'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Timings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      start: {
        type: Sequelize.TIME
      },
      finish: {
        type: Sequelize.TIME
      },
      place: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.TEXT
      },
      eventId: {
        type: Sequelize.INTEGER
      },
      responsibleId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Timings');
  }
};