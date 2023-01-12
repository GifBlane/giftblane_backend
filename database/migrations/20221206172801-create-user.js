'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			lastname: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
				unique: true,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			idSetting: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Settings',
					key: 'id',
				},
				onDelet: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			type_id: {
				type: Sequelize.ENUM('cc', 'pasaporte'),
				allowNull: false,
			},
			num_id: {
				type: Sequelize.DOUBLE,
				unique: true,
				allowNull: false,
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
		await queryInterface.dropTable('Users');
	},
};
