const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Responsible, { foreignKey: 'responsebleId' });
      this.belongsTo(models.Event, { foreignKey: 'eventId' });
      this.hasMany(models.Guest, {
        foreignKey: 'tableId',
      });
      // define association here
    }
  }
  Table.init(
    {
      name: DataTypes.STRING,
      place: DataTypes.STRING,
      coment: DataTypes.TEXT,
      responsebleId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Table',
    },
  );
  return Table;
};
