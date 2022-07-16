"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: (queryInterface) => {
        return queryInterface.addColumn("users", "hashResetSenha", {
            type: sequelize_1.DataTypes.STRING(300),
        });
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn("users", "hashResetSenha");
    },
};
