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
const user_model_1 = __importDefault(require("../models/user.model"));
const authorize = (permittedRoles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (!permittedRoles)
            return next();
        const user = req.user;
        const isAllowed = yield user_model_1.default.findOne({
            _id: user._id,
            role: { $in: permittedRoles }
        }).lean().exec();
        if (isAllowed)
            return next();
        return res.status(401).json({
            status: 'failed',
            message: "You are not authorized to access this page"
        });
    });
};
exports.default = authorize;
