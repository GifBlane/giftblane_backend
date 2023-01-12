'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Settings', [
			{
				percentage: 5,
				role: 'admin',
				idUser: 1,
				isVerify: true,
				type: 'ADMIN',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				percentage: 5,
				role: 'seller',
				idUser: 3,
				isVerify: true,
				type: 'BLACK',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				percentage: 5,
				role: 'seller',
				idUser: 2,
				isVerify: true,
				type: 'NEMO',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Settings', null, {});
	},
};
