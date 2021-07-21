"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bus_controller_1 = __importDefault(require("./controllers/bus.controller"));
const app = express_1.default();
app.use(express_1.default.json());
app.use('/bus', bus_controller_1.default);
exports.default = app;
