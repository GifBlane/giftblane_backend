'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pin', [
			{
				swap: 'prueba',
				typeCode: 'n01',
				status: 'active',
				code: 'c01',
				typeCard: 'f01',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				swap: 'prueba1',
				typeCode: 'n02',
				status: 'active',
				code: 'c02',
				typeCard: 'f02',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pin', null, {});
	},
};
