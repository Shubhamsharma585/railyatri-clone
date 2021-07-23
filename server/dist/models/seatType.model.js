"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var seatStatus;
(function (seatStatus) {
    seatStatus["vacant"] = "vacant";
    seatStatus["booked"] = "booked";
})(seatStatus || (seatStatus = {}));
;
var seatBerth;
(function (seatBerth) {
    seatBerth["upper"] = "upper";
    seatBerth["lower"] = "lower";
})(seatBerth || (seatBerth = {}));
const seatTypeSchema = new mongoose_1.Schema({
    seatNumber: {
        type: String || Number,
        required: true
    },
    seatStatus: {
        type: String,
        enum: Object.values(seatStatus),
        default: 'vacant',
        required: true
    },
    seatBerth: {
        type: String,
        enum: Object.values(seatBerth),
        required: true
    }
});
const SeatType = mongoose_1.model('seatType', seatTypeSchema);
exports.default = SeatType;
