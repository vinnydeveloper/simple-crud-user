"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.resolve("uploads"));
        //faz um copia na cdn escolhida
    },
    filename: function (req, file, cb) {
        const nameFile = file.originalname.replace(/ /g, "").toLowerCase();
        cb(null, `${Date.now()}-${nameFile}`);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;
