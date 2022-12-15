'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recharges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateCreate: {
        type: Sequelize.DATE
      },
      idUserCreated: {
        type: Sequelize.INTEGER
      },
      idComerce: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Commerces',
          key: 'id'
        },
        onDelet: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      value: {
        type: Sequelize.FLOAT
      },
      numCard: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recharges');
  }
};