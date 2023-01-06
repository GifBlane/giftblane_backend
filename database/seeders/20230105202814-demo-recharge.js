'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Recharges', [
			{
				dateCreate: new Date(),
				idUserCreated: 1,
				idComerce: 1,
				value: 500,
				numCard: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				dateCreate: new Date(),
				idUserCreated: 1,
				idComerce: 1,
				value: 600,
				numCard: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				dateCreate: new Date(),
				idUserCreated: 1,
				idComerce: 1,
				value: 700,
				numCard: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				dateCreate: new Date(),
				idUserCreated: 1,
				idComerce: 1,
				value: 800,
				numCard: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				dateCreate: new Date(),
				idUserCreated: 1,
				idComerce: 1,
				value: 900,
				numCard: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Recharges', null, {});
	},
};
