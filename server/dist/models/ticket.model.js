"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ticketSchema = new mongoose_1.Schema({
    passengerName: {
        type: String,
        required: true
    },
    passengerAddress: {
        type: String,
        required: true
    },
    bordingPoint: {
        type: String,
        required: true
    },
    dropingPoint: {
        type: String,
        required: true
    },
    bordingTime: {
        type: String,
        required: true
    },
    dropingTime: {
        type: String,
        required: true
    },
    fare: {
        type: Number || String,
        required: true
    },
    seatNumber: {
        type: String || Number,
        required: true
    },
    seatBerth: {
        type: String,
        required: true
    },
});
const Ticket = mongoose_1.model('ticket', ticketSchema);
exports.default = Ticket;
