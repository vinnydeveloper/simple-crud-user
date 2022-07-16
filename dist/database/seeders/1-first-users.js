"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nivelUser_1 = __importDefault(require("../../constants/nivelUser"));
exports.default = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert("users", [
            {
                name: "Vinny",
                email: "vinicius@email.com",
                nivel: nivelUser_1.default.ADMIN,
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
    down: (queryInterface) => {
        return queryInterface.bulkDelete("users", {});
    },
};
