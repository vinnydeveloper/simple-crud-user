"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const App_1 = __importDefault(require("./infra/App"));
const app = new App_1.default();
const port = process.env.PORT ? process.env.PORT : 4000;
app.setup({ port });
