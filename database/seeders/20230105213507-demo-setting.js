'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Settings', [
			{
				percentage: 5,
				role: 'admin',
				password: 'pass1234',
				idUser: 1,
				isVerify: true,
				type: 'also',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Settings', null, {});
	},
};
