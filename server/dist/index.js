"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./controllers/auth.controller");
const bus_controller_1 = __importDefault(require("./controllers/bus.controller"));
const app = express_1.default();
app.use(express_1.default.json());
app.post('/register', auth_controller_1.register);
app.post('/login', auth_controller_1.login);
app.use('/bus', bus_controller_1.default);
exports.default = app;
