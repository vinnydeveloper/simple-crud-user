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
const express_1 = __importDefault(require("express"));
const database_1 = require("../database");
const BaseRoutes_1 = __importDefault(require("./BaseRoutes"));
class App {
    constructor() {
        this.defaultPort = 4000;
        this.instance = (0, express_1.default)();
    }
    setup(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedPort = options.port ? options.port : this.defaultPort;
            this.instance.use(express_1.default.json());
            this.instance.use(BaseRoutes_1.default);
            database_1.mySqlConection.hasConection();
            if (options.isTest)
                return;
            this.instance.listen(selectedPort, () => console.log(`Servidor rodando na porta: ${selectedPort}`));
        });
    }
    getInstance() {
        return this.instance;
    }
}
exports.default = App;
