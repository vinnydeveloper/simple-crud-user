"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySqlConection = void 0;
const Conection_1 = __importDefault(require("./Conection"));
const env_1 = __importDefault(require("../infra/config/env"));
const mySqlConection = new Conection_1.default(env_1.default.DB_NAME, env_1.default.DB_USER, env_1.default.DB_PASS, {
    dialect: "mysql",
    port: env_1.default.DB_PORT,
    host: env_1.default.DB_HOST,
});
exports.mySqlConection = mySqlConection;
