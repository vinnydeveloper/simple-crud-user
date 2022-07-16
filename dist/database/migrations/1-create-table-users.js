"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (queryInterface) => {
        return queryInterface.createTable("users", {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nivel: {
                type: sequelize_1.DataTypes.INTEGER,
                defaultValue: 1,
            },
            name: {
                type: sequelize_1.DataTypes.STRING(255),
            },
            email: {
                type: sequelize_1.DataTypes.STRING(255),
                unique: true,
            },
            senha: {
                type: sequelize_1.DataTypes.STRING(300),
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE(),
            },
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable("users");
    },
};
