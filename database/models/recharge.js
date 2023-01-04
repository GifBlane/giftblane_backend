'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Recharge extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		/*  static associate(models) {
      // define association here
      Recharge.belongsTo(models.Commerce,{
        foreignKey:'id',
        target_key:'idComerce'
      })

      Recharge.hasMany(models.RechargePin, {
        foreignKey:'idRecharge'
      })
    } */
	}
	Recharge.init(
		{
			dateCreate: DataTypes.DATE,
			idUserCreated: DataTypes.INTEGER,
			idComerce: DataTypes.INTEGER,
			value: DataTypes.FLOAT,
			numCard: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Recharge',
		}
	);
	return Recharge;
};
