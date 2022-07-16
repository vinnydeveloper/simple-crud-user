"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const routes = (0, express_1.Router)();
routes.post("/login", controller_1.default.login);
routes.post("/reset-senha", controller_1.default.gerarTokenDeSenha);
routes.post("/recuperar-senha", controller_1.default.recuperarSenha);
exports.default = routes;
