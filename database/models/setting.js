'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Setting extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		/*     static associate(models) {
      // define association here
      Setting.belongsTo(models.User, {
        foreignKey: 'id',
        target_key: 'idUser'
      })
    } */
	}
	Setting.init(
		{
			percentage: DataTypes.INTEGER,
			role: DataTypes.STRING,
			password: DataTypes.STRING,
			idUser: DataTypes.INTEGER,
			isVerify: DataTypes.BOOLEAN,
			type: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Setting',
		}
	);
	return Setting;
};
