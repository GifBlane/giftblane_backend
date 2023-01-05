'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Commerces', [
			{
				name: 'exito',
				phone: '3155863996',
				nit: '80014500-2',
				address: 'cra 123 n 125 - 65',
				image: ' ',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'jumbo',
				phone: '3155863948',
				nit: '80014600-3',
				address: 'cra 123 n 125 - 78',
				image: ' ',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: ' Justo y bueno',
				phone: '3155863155',
				nit: '80014700-4',
				address: 'cra 123 n 124 - 52',
				image: ' ',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Ara',
				phone: '3155868224',
				nit: '80014800-1',
				address: 'cra 123 n 789 - 85',
				image: ' ',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Alkosto',
				phone: '3155867514',
				nit: '80014900-2',
				address: 'cra 123 n 365 -45',
				image: ' ',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Commerces', null, {});
	},
};
