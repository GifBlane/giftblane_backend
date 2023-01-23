'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pins', [
			{
				typeCard: 'nemo',
				code: 'NEQRBY0001',
				status: 'disponible',
				typeCode: 'QR',
				swap: 'buy',
				dateVigencia: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				typeCard: 'nemo',
				code: 'NEQRGM0002',
				status: 'disponible',
				typeCode: 'QR',
				swap: 'game',
				dateVigencia: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				typeCard: 'nemo',
				code: 'NEQRBY0003',
				status: 'activado',
				typeCode: 'QR',
				swap: 'buy',
				dateVigencia: '2023-06-17',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				typeCard: 'black',
				code: 'BLQRBY0001',
				status: 'disponible',
				typeCode: 'QR',
				swap: 'buy',
				dateVigencia: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				typeCard: 'black',
				code: 'BLQRGM0002',
				status: 'activado',
				typeCode: 'QR',
				swap: 'game',
				dateVigencia: '2023-06-17',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pins', null, {});
	},
};
