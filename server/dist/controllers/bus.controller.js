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
const bus_model_1 = __importDefault(require("../models/bus.model"));
const price_model_1 = __importDefault(require("../models/price.model"));
const seatType_model_1 = __importDefault(require("../models/seatType.model"));
const protect_1 = __importDefault(require("../middlewares/protect"));
const authorise_1 = __importDefault(require("../middlewares/authorise"));
const router = express_1.default();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = +req.query.page | 1;
        const limit = +req.query.limit | 10;
        const offset = (page - 1) * limit;
        const buses = yield bus_model_1.default.find()
            .populate({ path: 'companyNameId', select: 'companyName' })
            .populate('priceId')
            .populate({ path: 'seats', populate: 'seatTypeId' })
            .skip(offset)
            .limit(limit)
            .lean()
            .exec();
        res.status(200).json({
            status: 'success',
            buses
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
}));
router.post('/', protect_1.default, authorise_1.default(["admin", "owner"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inpPrice = req.body.price;
        let seats = req.body.seats;
        const seatType = seats.seatType;
        const seatTypeRegister = yield seatType_model_1.default.create(seatType);
        seats = Object.assign(Object.assign({}, seats), { seatTypeId: seatTypeRegister._id });
        const price = yield price_model_1.default.create(inpPrice);
        const busDetail = yield bus_model_1.default.create(Object.assign(Object.assign({}, req.body), { priceId: price._id, seats }));
        res.status(201).json({
            status: 'success',
            bus: busDetail
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
}));
router.patch('/:id', protect_1.default, authorise_1.default(["admin", "owner"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedBusDetails = yield bus_model_1.default.findByIdAndUpdate(id, Object.assign({}, req.body), { new: true });
        res.status(201).json({
            status: 'success',
            bus: updatedBusDetails
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
}));
router.patch('/:id/price', protect_1.default, authorise_1.default(["admin", "owner"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const busDetail = yield bus_model_1.default.findById(id).lean().exec();
        const updatedPrice = yield price_model_1.default.findByIdAndUpdate(busDetail === null || busDetail === void 0 ? void 0 : busDetail.price, ...req.body, { new: true });
        res.status(201).json({
            status: 'success',
            price: updatedPrice
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
}));
router.delete('/:id', protect_1.default, authorise_1.default(["admin", "owner"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const busDetail = yield bus_model_1.default.findById(id).lean().exec();
        yield price_model_1.default.findByIdAndDelete(busDetail === null || busDetail === void 0 ? void 0 : busDetail.price);
        yield bus_model_1.default.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            message: 'deleted successfully'
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
