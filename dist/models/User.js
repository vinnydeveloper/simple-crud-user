"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const nivelUser_1 = __importDefault(require("../constants/nivelUser"));
class User {
    constructor(conexao) {
        this.modelName = "Users";
        const con = conexao.getInstance();
        this.instance = con.define(this.modelName, {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nivel: {
                type: sequelize_1.DataTypes.INTEGER,
                defaultValue: nivelUser_1.default.USER,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
            },
            senha: {
                type: sequelize_1.DataTypes.STRING(300),
            },
            hashResetSenha: {
                type: sequelize_1.DataTypes.STRING(300),
            },
            createdAt: {
                type: sequelize_1.DataTypes.DATE,
            },
            updatedAt: {
                type: sequelize_1.DataTypes.DATE,
            },
        }, {
            tableName: this.modelName.toLowerCase(),
        });
    }
}
exports.User = User;
