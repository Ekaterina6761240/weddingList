'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Timing.init({
    name: DataTypes.STRING,
    start: DataTypes.TIME,
    finish: DataTypes.TIME,
    place: DataTypes.STRING,
    comment: DataTypes.TEXT,
    eventId: DataTypes.INTEGER,
    responsibleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Timing',
  });
  return Timing;
};