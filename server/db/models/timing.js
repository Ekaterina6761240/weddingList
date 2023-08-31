'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Responsible, { foreignKey: 'responsebleId' });
      this.belongsTo(models.Event, { foreignKey: 'eventId' });
      // define association here
    }
  }
  Timing.init(
    {
      name: DataTypes.STRING,
      start: DataTypes.STRING,
      finish: DataTypes.STRING,
      place: DataTypes.STRING,
      comment: DataTypes.TEXT,
      eventId: DataTypes.INTEGER,
      responsibleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Timing',
    },
  );
  return Timing;
};
