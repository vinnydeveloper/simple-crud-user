"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: "O token não especificado" });
    }
    ("JWT token");
    const partsToken = authorization.split(" ");
    if (partsToken.length !== 2) {
        return res.status(401).json({ message: "Token mal formatado" });
    }
    const [key, token] = partsToken;
    if (key.indexOf("Bearer") < 0) {
        return res.status(401).json({ message: "Token mal formatado" });
    }
    try {
        const data = jsonwebtoken_1.default.verify(token, "CRUDGAMA");
        req.user = data;
        return next();
    }
    catch (e) {
        return res
            .status(401)
            .json({ message: "Token invalido! Faça login novamente!" });
    }
};
