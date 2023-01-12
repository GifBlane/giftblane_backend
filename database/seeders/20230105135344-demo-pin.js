'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pins', [
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
			{
				swap: 'prueba2',
				typeCode: 'n02',
				status: 'active',
				code: 'c02',
				typeCard: 'f02',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				swap: 'prueba3',
				typeCode: 'n03',
				status: 'active',
				code: 'c03',
				typeCard: 'f03',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				swap: 'prueba4',
				typeCode: 'n04',
				status: 'active',
				code: 'c04',
				typeCard: 'f04',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pins', null, {});
	},
};
