"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var busType;
(function (busType) {
    busType["ac"] = "ac";
    busType["luxory"] = "luxory";
    busType["sleeper"] = "sleeper";
})(busType || (busType = {}));
const busSchema = new mongoose_1.Schema({
    companyNameId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    priceId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'price',
        required: true
    },
    busType: {
        type: String,
        enum: Object.values(busType),
        required: true
    },
    seats: {
        totalSeats: {
            type: Number,
            required: true
        },
        seatsBooked: {
            type: Number,
            required: true
        },
        totalSleeperSeats: {
            type: Number,
            required: true
        },
        seatTypeId: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'seatType',
                required: true
            }
        ]
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    originCity: {
        type: String,
        required: true
    },
    destinationCity: {
        type: String,
        required: true
    },
    gallery: [
        {
            type: String
        }
    ]
}, {
    timestamps: true,
    versionKey: false
});
const Bus = mongoose_1.model('bus', busSchema);
exports.default = Bus;
