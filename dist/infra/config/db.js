"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("./env"));
const db = {
    username: env_1.default.DB_USER,
    password: env_1.default.DB_PASS,
    database: env_1.default.DB_NAME,
    host: env_1.default.DB_HOST,
    dialect: "mysql",
};
console.log(db);
module.exports = db;
