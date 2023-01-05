'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class RechargePin extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		/*  static associate(models) {
      // define association here
      RechargePin.belongsTo(models.Recharge,{
        foreignKey:'id',
        target_key:'idRecharge'
      })

      RechargePin.belongsTo(models.Pin,{
        foreignKey:'id',
        target_key:'idPin'
      })
    } */
	}
	RechargePin.init(
		/* {
			idPin: DataTypes.INTEGER,
			idRecharge: DataTypes.INTEGER,
		}, */
		{
			sequelize,
			modelName: 'RechargePin',
		}
	);
	return RechargePin;
};
