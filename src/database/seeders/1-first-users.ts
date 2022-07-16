import { QueryInterface, DataTypes } from "sequelize";
import NIVEL_USER from "../../constants/nivelUser";
export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Vinny",
        email: "vinicius@email.com",
        nivel: NIVEL_USER.ADMIN,
        senha: "12345678",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        name: "Karol",
        email: "karol@email.com",
        senha: "12345678",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("users", {});
  },
};
