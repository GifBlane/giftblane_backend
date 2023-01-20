'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				name: 'John',
				lastName: 'Doe',
				email: 'example@example.com',
				password: 'pass1234',
				typeId: 'cc',
				numId: 1019885654,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Jair',
				lastName: 'rincon',
				email: 'example1@example.com',
				password: 'pass5678',
				typeId: 'pasaporte',
				numId: 1019885412,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Alex',
				lastName: 'garcia',
				email: 'example2@example.com',
				password: 'pass5678',
				typeId: 'pasaporte',
				numId: 1019885256,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	},
};
