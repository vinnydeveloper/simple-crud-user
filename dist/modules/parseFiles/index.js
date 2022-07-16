"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx_1 = __importDefault(require("./leitores/xlsx"));
function parseFile(file) {
    "usuario.final.xlsx";
    const extensao = file.split(".").pop();
    let data = [];
    switch (extensao) {
        case "xlsx":
            data = (0, xlsx_1.default)(file);
            break;
        default:
            console.log("arquivo não mapeado");
    }
    return data;
}
exports.default = parseFile;
