"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const database_1 = require("../database");
const User_1 = require("./User");
const user = new User_1.User(database_1.mySqlConection);
exports.user = user;
