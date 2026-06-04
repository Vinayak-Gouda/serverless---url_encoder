"use strict";

// module.exports = {
  export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable("urls", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      long_url: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      short_code: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  }

  export async function down(queryInterface) {
    await queryInterface.dropTable("urls");
  }
// };
