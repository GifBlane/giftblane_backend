'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Settings', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			percentage: {
				type: Sequelize.INTEGER,
			},
			role: {
				type: Sequelize.STRING,
			},

			idUser: {
				type: Sequelize.INTEGER,
			},
			isVerify: {
				type: Sequelize.BOOLEAN,
			},
			type: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Settings');
	},
};
