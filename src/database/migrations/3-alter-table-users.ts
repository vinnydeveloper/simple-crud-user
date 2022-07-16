import { QueryInterface, DataTypes } from "sequelize";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("users", "hashResetSenha", {
      type: DataTypes.STRING(300),
    });
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("users", "hashResetSenha");
  },
};
