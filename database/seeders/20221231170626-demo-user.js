'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				name: 'John',
				lastname: 'Doe',
				email: 'example@example.com',
				password: 'pass1234',
				type_id: 'cc',
				num_id: 1019885654,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Jair',
				lastname: 'rincon',
				email: 'example1@example.com',
				password: 'pass5678',
				type_id: 'pasaporte',
				num_id: 1019885412,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Alex',
				lastname: 'garcia',
				email: 'example2@example.com',
				password: 'pass5678',
				type_id: 'pasaporte',
				num_id: 1019885256,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	},
};
