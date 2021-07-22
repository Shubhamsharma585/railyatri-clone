"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const priceSchema = new mongoose_1.Schema({
    sleeper: Number,
    luxory: Number,
    ac: Number,
}, {
    timestamps: true,
    versionKey: false
});
const Price = mongoose_1.model('price', priceSchema);
exports.default = Price;
