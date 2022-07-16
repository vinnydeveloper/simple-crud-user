"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const parseFiles_1 = __importDefault(require("../parseFiles"));
const path_1 = __importDefault(require("path"));
const controller = {
    cadastro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashPass = bcryptjs_1.default.hashSync(req.body.senha, 10);
            const newUser = yield models_1.user.instance.create(Object.assign(Object.assign({}, req.body), { senha: hashPass }));
            return res.json(newUser);
        });
    },
    exibir(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const userSaved = yield models_1.user.instance.findByPk(id);
            return res.json(userSaved);
        });
    },
    cadastroBatch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { file } = req;
            if (!file) {
                return res.status(400).json("Arquivo não enviado");
            }
            const listaUsuarios = (0, parseFiles_1.default)(path_1.default.resolve("uploads", file === null || file === void 0 ? void 0 : file.filename));
            const map = listaUsuarios.map((user) => {
                const obj = {
                    name: user.nome,
                    email: user.email,
                    senha: bcryptjs_1.default.hashSync(user.senha.toString(), 10),
                };
                return obj;
            });
            yield models_1.user.instance.bulkCreate(map);
            return res.sendStatus(204);
        });
    },
};
exports.default = controller;
