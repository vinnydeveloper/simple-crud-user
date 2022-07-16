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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = require("../../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const logger_1 = __importDefault(require("../../infra/logger"));
const controller = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            const targetUser = yield models_1.user.instance.findOne({
                where: {
                    email,
                },
            });
            if (!targetUser) {
                return res.status(400).json("Email não cadastrado!");
            }
            if (!bcryptjs_1.default.compareSync(senha, targetUser.senha)) {
                return res.status(401).json("Senha invalida!");
            }
            const token = jsonwebtoken_1.default.sign({
                id: targetUser.id,
                email: targetUser.email,
                nome: targetUser.name,
                nivel: targetUser.nivel,
            }, "CRUDGAMA");
            return res.json(token);
        });
    },
    gerarTokenDeSenha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.default.info(`[gerarTokenDeSenha] start function body=${JSON.stringify(req.body)} client_ip=${req.ips}`);
            const { email } = req.body;
            const savedUser = yield models_1.user.instance.findOne({
                where: {
                    email,
                },
            });
            if (!savedUser) {
                logger_1.default.error(`[gerarTokenDeSenha] user not found`);
                return res.status(404).json("Email não encontrado");
            }
            logger_1.default.log("nivel", "mensagem");
            logger_1.default.info(`[gerarTokenDeSenha] user = ${JSON.stringify(savedUser)}`);
            const token = crypto_js_1.default.AES.encrypt(`${savedUser.email}`, "GAMACRUD").toString();
            // enviar um email com o token
            savedUser.hashResetSenha = token;
            yield savedUser.save();
            logger_1.default.info(`[gerarTokenDeSenha] finish function`);
            return res.json(token);
        });
    },
    recuperarSenha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            logger_1.default.info(`[recuperarSenha] start function body = ${JSON.stringify(req.body)}`);
            const { token, senha } = req.body;
            const bytes = crypto_js_1.default.AES.decrypt(token, "GAMACRUD");
            const email = bytes.toString(crypto_js_1.default.enc.Utf8);
            if (!email) {
                logger_1.default.error(`[recuperarSenha] token invalido, pois não existe o email`);
                return res.status(400).json("token invalido");
            }
            const savedUser = yield models_1.user.instance.findOne({
                where: {
                    email,
                },
            });
            if (!savedUser) {
                logger_1.default.error(`[recuperarSenha] Email não encontrado email= ${email}`);
                return res.status(404).json("Email não encontrado");
            }
            if (!savedUser.hashResetSenha || savedUser.hashResetSenha !== token) {
                logger_1.default.error(`[recuperarSenha] Token diferente ou não existe no banco de dados`);
                return res.status(400).json("token invalido");
            }
            if (bcryptjs_1.default.compareSync(senha, savedUser.senha)) {
                return res.status(400).json("Senha ja utilizada");
            }
            const newSenha = bcryptjs_1.default.hashSync(senha, 10);
            savedUser.senha = newSenha;
            savedUser.hashResetSenha = null;
            yield savedUser.save();
            logger_1.default.info(`[recuperarSenha] finalizando a função com a senha alterada`);
            return res.sendStatus(201);
        });
    },
};
exports.default = controller;
