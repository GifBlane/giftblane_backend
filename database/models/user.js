'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Setting, {
        foreignKey: 'id',
        target_key: 'idSetting'
      })

      User.belongsToMany(models.Commerce, {
        through: 'commerce_users',
        as:'Commerces',
        foreignKey:'idCommerce'
      })
      
    }
  };
  User.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    idSetting: DataTypes.INTEGER,
    email: DataTypes.STRING,
    type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};