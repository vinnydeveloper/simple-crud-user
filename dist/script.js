"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("./database");
const db = database_1.mySqlConection.getInstance();
db.query("SELECT name FROM users LIMIT 10", {
    type: sequelize_1.QueryTypes.SELECT,
}).then((response) => console.log(response));
