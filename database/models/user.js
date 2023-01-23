'use strict';
const { Model } = require('sequelize');
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
				target_key: 'idSetting',
			});

			User.belongsToMany(models.Commerce, {
				through: 'commerce_users',
				as: 'Commerces',
				foreignKey: 'idCommerce',
			});
		}
	}
	User.init(
		{
			name: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			typeId: DataTypes.ENUM('cc', 'pasaporte'),
			numId: DataTypes.DOUBLE,
		},
		{
			sequelize,
			modelName: 'User',
		}
	);
	return User;
};
