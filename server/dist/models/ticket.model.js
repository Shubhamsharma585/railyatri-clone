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
    boardingPoint: {
        type: String,
        required: true
    },
    droppingPoint: {
        type: String,
        required: true
    },
    boardingTime: {
        type: String,
        required: true
    },
    fare: {
        type: Number || String,
        required: true
    },
    seat: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'seatType',
        required: true
    },
    ticketStatus: {
        type: String,
        enum: ["booked", "cancelled"],
        default: 'booked'
    }
});
const Ticket = mongoose_1.model('ticket', ticketSchema);
exports.default = Ticket;
