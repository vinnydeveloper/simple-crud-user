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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Conection {
    constructor(dbName, dbUser, dbPass, dbConfig) {
        this.db_name = dbName;
        this.db_user = dbUser;
        this.db_pass = dbPass;
        this.db_config = dbConfig;
        try {
            this.instance = new sequelize_1.Sequelize(this.db_name, this.db_user, this.db_pass, this.db_config);
        }
        catch (err) {
            console.error("Error ao tentar uma conexão com banco dados");
            throw err;
        }
    }
    getInstance() {
        return this.instance;
    }
    hasConection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.instance.authenticate();
                console.log("Banco dados conectado!");
            }
            catch (error) {
                console.error("Erro ao tentar se conectar ao banco de dados1");
            }
        });
    }
}
exports.default = Conection;
