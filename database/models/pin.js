'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Pin extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		/* static associate(models) {
			// define association here
			Pin.hasMany(models.RechargePin, {
				foreignKey: 'idPin',
			});
		} */
	}
	Pin.init(
		{
			typeCard: DataTypes.ENUM('nemo', 'black'),
			code: DataTypes.STRING,
			status: DataTypes.STRING,
			typeCode: DataTypes.STRING,
			swap: DataTypes.ENUM('buy', 'game'),
			dateVigencia: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Pin',
		}
	);
	return Pin;
};
