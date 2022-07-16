import { QueryInterface, DataTypes } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable("users", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nivel: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      email: {
        type: DataTypes.STRING(255),
        unique: true,
      },
      senha: {
        type: DataTypes.STRING(300),
      },
      createdAt: {
        type: DataTypes.DATE(),
      },
      updatedAt: {
        type: DataTypes.DATE(),
      },
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable("users");
  },
};
