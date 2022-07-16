"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx_1 = __importDefault(require("xlsx"));
function parseXLSX(file) {
    const arquivo = xlsx_1.default.readFile(file);
    const parsedData = xlsx_1.default.utils.sheet_to_json(arquivo.Sheets[arquivo.SheetNames[0]]);
    return parsedData;
}
exports.default = parseXLSX;
