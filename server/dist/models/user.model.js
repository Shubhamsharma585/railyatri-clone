"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
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
    companyName: {
        type: String,
        default: 'NA'
    },
    role: {
        type: String,
        enum: Object.values(roles),
        default: 'user',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
userSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next;
    bcrypt_1.default.hash(this.password, 8, (err, hash) => {
        if (err)
            return next(err);
        this.password = hash;
        next();
    });
});
userSchema.methods.checkPassword = function (password) {
    const hashedPassword = this.password;
    return new Promise((resolve, reject) => {
        bcrypt_1.default.compare(password, hashedPassword, (err, same) => {
            if (err)
                return reject(err);
            resolve(same);
        });
    });
};
const User = mongoose_1.model('user', userSchema);
exports.default = User;
