"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseFiles_1 = __importDefault(require("./modules/parseFiles"));
const path_1 = __importDefault(require("path"));
const models_1 = require("./models");
const listaUsuarios = (0, parseFiles_1.default)(path_1.default.resolve("usuarios.xlsx"));
const map = listaUsuarios.map((user) => {
    const obj = {
        name: user.nome,
        email: user.email,
        senha: user.senha,
    };
    return obj;
});
models_1.user.instance.bulkCreate(map).then((result) => console.log(result));
