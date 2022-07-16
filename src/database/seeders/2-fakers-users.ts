import { QueryInterface, DataTypes } from "sequelize";
import { faker } from "@faker-js/faker";

export default {
  up: (queryInterface: QueryInterface) => {
    // let users = [
    //   ...Array(1000).map((i) => ({
    //     name: faker.name.firstName(),
    //     email: faker.internet.email(),
    //     senha: faker.internet.password(),
    //     createdAt: new Date().toISOString(),
    //     updatedAt: new Date().toISOString(),
    //   })),
    // ];

    let users = [];

    for (let index = 0; index < 1000; index++) {
      users.push({
        name: faker.name.firstName(),
        nivel: Number(faker.random.numeric(1)) % 2,
        email: faker.internet.email(),
        senha: faker.internet.password(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    return queryInterface.bulkInsert("users", users);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("users", {});
  },
};
