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
    companyName: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    price: [
        {
            type: Number,
            required: true
        }
    ],
    busType: {
        type: busType,
        required: true
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
});
