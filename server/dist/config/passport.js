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
const passport_1 = __importDefault(require("passport"));
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const auth_controller_1 = require("../controllers/auth.controller");
const uuid_1 = require("uuid");
const user_model_1 = __importDefault(require("../models/user.model"));
require('dotenv').config();
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY,
    callbackURL: "http://localhost:5000/auth/google/callback"
}, function (accessToken, refreshToken, profile, done) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let user = yield user_model_1.default.findOne({ email: profile._json.email });
            if (!user) {
                user = yield user_model_1.default.create({ email: profile._json.email, password: uuid_1.v4() });
            }
            const token = auth_controller_1.newToken(user);
            //console.log(accessToken, refreshToken, profile)
            return done(null, { user, token });
        }
        catch (err) {
            console.log(err);
        }
    });
}));
exports.default = passport_1.default;
