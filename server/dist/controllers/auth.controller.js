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
exports.login = exports.register = void 0;
require('dotenv').config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const secretKey = process.env.JWT_SECRET_KEY || '';
const newToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user._id }, secretKey);
};
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let email = req.body.email;
    try {
        let user = yield user_model_1.default.findOne({ email }).lean().exec();
        if (user) {
            return res.status(400).json({
                status: 'failed',
                message: 'User with same email id already exists'
            });
        }
        ;
        user = yield user_model_1.default.create(req.body);
        const token = newToken(user);
        res.status(201).json({
            token,
            user
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    try {
        let user = yield user_model_1.default.findOne({ email }).exec();
        if (!user) {
            return res.status(400).json({
                status: 'failed',
                message: 'Incorrect email or password'
            });
        }
        ;
        const match = yield user.checkPassword(password);
        if (!match) {
            return res.status(400).json({
                status: 'failed',
                message: "Incorrect email or password"
            });
        }
        const token = newToken(user);
        return res.status(200).json({ token });
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
});
exports.login = login;
