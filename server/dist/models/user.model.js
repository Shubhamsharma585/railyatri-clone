"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var roles;
(function (roles) {
    roles["admin"] = "admin";
    roles["owner"] = "owner";
    roles["user"] = "user";
})(roles || (roles = {}));
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: Number || String,
        maxLength: 10,
        minLength: 10
    },
    email: {
        type: String,
    },
    companyName: {
        type: String,
        default: 'NA'
    },
    role: {
        type: roles
    }
}, {
    timestamps: true,
    versionKey: false
});
