const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Timing, { foreignKey: 'eventId' });

      this.hasMany(models.Table, { foreignKey: 'eventId' });
      this.hasMany(models.Guest, { foreignKey: 'eventId' });
      // define association here
    }
  }
  Event.init(
    {
      name: DataTypes.STRING,
      date: DataTypes.STRING,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Event',
    },
  );
  return Event;
};
