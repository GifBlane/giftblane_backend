'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pin.hasMany(models.RechargePin, {
        foreignKey:'idPin'
      })
    }
  };
  Pin.init({
    swap: DataTypes.STRING,
    typeCode: DataTypes.STRING,
    status: DataTypes.STRING,
    code: DataTypes.STRING,
    typeCard: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pin',
  });
  return Pin;
};