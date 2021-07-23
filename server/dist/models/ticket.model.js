"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ticketSchema = new mongoose_1.Schema({});
const Ticket = mongoose_1.model('ticket', ticketSchema);
exports.default = Ticket;
