'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Pins', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			typeCard: {
				type: Sequelize.ENUM('nemo', 'black'),
				allowNull: false,
			},
			code: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			typeCode: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: 'QR',
			},
			swap: {
				type: Sequelize.ENUM('buy', 'game'),
			},
			dateVigencia: {
				allowNull: true,
				type: Sequelize.DATE,
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
		await queryInterface.dropTable('Pins');
	},
};
