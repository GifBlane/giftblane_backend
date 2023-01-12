'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('RechargePins', [
			{
				idPin: 1,
				idRecharge: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				idPin: 1,
				idRecharge: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				idPin: 1,
				idRecharge: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('RechargePins', null, {});
	},
};
