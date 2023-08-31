const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Responsible extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Table, { foreignKey: 'responsebleId' });
      this.hasMany(models.Timing, { foreignKey: 'responsebleId' });
      // define association here
    }
  }
  Responsible.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Responsible',
    },
  );
  return Responsible;
};
