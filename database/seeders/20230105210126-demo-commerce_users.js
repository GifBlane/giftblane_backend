'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('commerce_users', [
			{
				idUser: 1,
				idCommerce: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				idUser: 1,
				idCommerce: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				idUser: 1,
				idCommerce: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('commerce_users', null, {});
	},
};
