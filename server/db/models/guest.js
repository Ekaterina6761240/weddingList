'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Guest.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    patronymic: DataTypes.STRING,
    role: DataTypes.STRING,
    side: DataTypes.STRING,
    presence: DataTypes.BOOLEAN,
    comment: DataTypes.TEXT,
    eventId: DataTypes.INTEGER,
    tableId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Guest',
  });
  return Guest;
};