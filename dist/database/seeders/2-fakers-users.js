"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
exports.default = {
    up: (queryInterface) => {
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
                name: faker_1.faker.name.firstName(),
                nivel: Number(faker_1.faker.random.numeric(1)) % 2,
                email: faker_1.faker.internet.email(),
                senha: faker_1.faker.internet.password(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            });
        }
        return queryInterface.bulkInsert("users", users);
    },
    down: (queryInterface) => {
        return queryInterface.bulkDelete("users", {});
    },
};
