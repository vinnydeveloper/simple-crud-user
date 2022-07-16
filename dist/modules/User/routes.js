"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nivelUser_1 = __importDefault(require("../../constants/nivelUser"));
const auth_1 = __importDefault(require("../../infra/middlewares/auth"));
const nivel_1 = __importDefault(require("../../infra/middlewares/nivel"));
const upload_1 = __importDefault(require("../../infra/middlewares/upload"));
const controller_1 = __importDefault(require("./controller"));
const routes = (0, express_1.Router)();
routes.post("/cadastro", controller_1.default.cadastro);
routes.get("/usuario/:id", auth_1.default, (0, nivel_1.default)([nivelUser_1.default.ADMIN, nivelUser_1.default.USER]), controller_1.default.exibir);
routes.post("/cadastro/batch", upload_1.default.single("file"), controller_1.default.cadastroBatch);
exports.default = routes;
