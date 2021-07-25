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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const seatType_model_1 = __importDefault(require("../models/seatType.model"));
const ticket_model_1 = __importDefault(require("../models/ticket.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const protect_1 = __importDefault(require("../middlewares/protect"));
const authorise_1 = __importDefault(require("../middlewares/authorise"));
// book seat
router.post('/:seatId/', protect_1.default, authorise_1.default(["user", "admin", "owner"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seatId = req.params.seatId;
        const userId = req.user._id;
        const seat = yield seatType_model_1.default.findByIdAndUpdate(seatId, {
            seatStatus: 'booked'
        }, { new: true });
        let ticket = yield ticket_model_1.default.create(req.body);
        let user = yield user_model_1.default.findByIdAndUpdate(userId, {
            $push: {
                tickets: ticket._id
            }
        }, { new: true });
        res.status(201).json({
            status: 'success',
            seat,
            ticket,
            user
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
}));
exports.default = router;
