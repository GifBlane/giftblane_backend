'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				name: 'John',
				lastname: 'Doe',
				email: 'example@example.com',
				type_id: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Jair',
				lastname: 'rincon',
				email: 'example1@example.com',
				type_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Alex',
				lastname: 'garcia',
				email: 'example2@example.com',
				type_id: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	},
};
