'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('commerce_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        // references: {
        //   model: 'Users',
        //   key: 'id'
        // },
        onDelet: 'SET NULL',
        onUpdate: 'SET NULL'
      },
      idCommerce: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        // references: {
        //   model: 'Commerces',
        //   key: 'id'
        // },
        onDelet: 'SET NULL',
        onUpdate: 'SET NULL'
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
    await queryInterface.dropTable('commerce_users');
  }
};