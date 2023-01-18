"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class commerce_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  commerce_users.init(
    {
      idUser: DataTypes.INTEGER,
      idCommerce: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "commerce_users",
    }
  );
  return commerce_users;
};
