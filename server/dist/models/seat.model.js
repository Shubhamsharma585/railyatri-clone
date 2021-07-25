"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const seatSchema = new mongoose_1.Schema({});
const Seat = mongoose_1.model('seat', seatSchema);
exports.default = Seat;
