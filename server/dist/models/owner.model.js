"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
var roles;
(function (roles) {
    roles["owner"] = "owner";
})(roles || (roles = {}));
const ownerSchema = new mongoose_1.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String,
        minLength: 10,
        maxLength: 10
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: Object.values(roles),
        default: 'owner',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
ownerSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next;
    bcrypt_1.default.hash(this.password, 8, (err, hash) => {
        if (err)
            return next(err);
        this.password = hash;
        next();
    });
});
ownerSchema.methods.checkPassword = function (password) {
    const hashedPassword = this.password;
    return new Promise((resolve, reject) => {
        bcrypt_1.default.compare(password, hashedPassword, (err, same) => {
            if (err)
                return reject(err);
            resolve(same);
        });
    });
};
const Owner = mongoose_1.model('owner', ownerSchema);
exports.default = Owner;
