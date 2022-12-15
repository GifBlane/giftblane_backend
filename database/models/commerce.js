'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commerce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Commerce.belongsToMany(models.User, {
        through: 'commerce_users',
        as:'Users',
        foreignKey:'idUser'
        
      })

      Commerce.hasMany(models.Recharge, {
        foreignKey:'idComerce'
      })
    }
  };
  Commerce.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    nit: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commerce',
  });
  return Commerce;
};