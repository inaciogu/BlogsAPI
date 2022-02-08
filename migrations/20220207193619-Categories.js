'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const CategoriesTable = queryInterface.createTable("Categories", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
    return CategoriesTable;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Categories");
  }
};
