'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('RechargePins', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			idPin: {
				type: Sequelize.INTEGER,
				references: {
					model: 'Pins',
					key: 'id',
				},
				onDelet: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			idRecharge: {
				type: Sequelize.INTEGER,
				/* references: {
          model: 'Recharges',
          key: 'id'
        },
        onDelet: 'CASCADE',
        onUpdate: 'CASCADE'
		*/
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
		await queryInterface.dropTable('RechargePins');
	},
};
