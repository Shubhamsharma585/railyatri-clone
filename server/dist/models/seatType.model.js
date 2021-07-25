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
<<<<<<< HEAD
const seatTypeSchema = new mongoose_1.Schema({
    seatNumber: {
        type: Number || String,
=======
var seatType;
(function (seatType) {
    seatType["sleeper"] = "sleeper";
    seatType["sitting"] = "sitting";
})(seatType || (seatType = {}));
const seatTypeSchema = new mongoose_1.Schema({
    seatNumber: {
        type: String || Number,
>>>>>>> a251af6ac3362bbff59f0998e9ed2296e272c77a
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
<<<<<<< HEAD
    }
=======
    },
    seatType: {
        type: String,
        enum: Object.values(seatType),
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
>>>>>>> a251af6ac3362bbff59f0998e9ed2296e272c77a
});
const SeatType = mongoose_1.model('seatType', seatTypeSchema);
exports.default = SeatType;
