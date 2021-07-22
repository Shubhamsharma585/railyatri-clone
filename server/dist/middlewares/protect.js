"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const user_model_1 = __importDefault(require("../models/user.model"));
const secretKey = process.env.JWT_SECRET_KEY || "";
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, secretKey, (err, paylaod) => {
            if (err)
                return reject(err);
            resolve(paylaod);
        });
    });
};
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bearerToken = req.headers.authorization;
    if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
        return res.status(400).json({
            status: 'failed',
            message: 'Please provide bearer token'
        });
    }
    ;
    const token = bearerToken.split(' ')[1].trim();
    let payload;
    try {
        payload = yield verifyToken(token);
    }
    catch (err) {
        return res.status(401).json({
            status: 'error',
            message: 'You are not authorized to access this page'
        });
    }
    ;
    let user;
    try {
        user = yield user_model_1.default.findById(payload.id).lean().exec();
    }
    catch (err) {
        return res.status(400).json({
            status: 'failed',
            message: 'Something went wrong, please try again later'
        });
    }
    ;
    if (!user) {
        return res.status(400).json({
            status: 'failed',
            message: 'You are not authorized to access this page'
        });
    }
    ;
    req.user = user;
    next();
});
exports.default = protect;
