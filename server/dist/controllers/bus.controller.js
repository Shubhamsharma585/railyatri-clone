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
// get all buses details
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
// get single bus detail
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const bus = yield bus_model_1.default.findById(id)
            .populate({ path: 'companyNameId', select: 'companyName' })
            .populate('priceId')
            .populate({ path: 'seats', populate: 'seatTypeId' })
            .lean()
            .exec();
        res.status(200).json({
            status: 'success',
            bus
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message
        });
    }
}));
// add new bus detail
router.post('/', protect_1.default, authorise_1.default(["admin", "owner"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req === null || req === void 0 ? void 0 : req.user;
        const inpPrice = req.body.price;
        let seats = req.body.seats;
        let seatType = seats.seatTypeId;
        let seatTypeId = yield seatType_model_1.default.create(seatType);
        seatTypeId = seatTypeId.map(item => item._id);
        seats = Object.assign(Object.assign({}, seats), { seatTypeId });
        const price = yield price_model_1.default.create(inpPrice);
        const busDetail = yield bus_model_1.default.create(Object.assign(Object.assign({}, req.body), { companyNameId: user._id, priceId: price._id, seats }));
        res.status(201).json({
            status: 'success',
            bus: busDetail
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failure',
            message: err.message,
            err
        });
    }
}));
// edit bus details except price and seat 
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
// edit price
router.patch('/:id/price', protect_1.default, authorise_1.default(["admin", "owner"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const busDetail = yield bus_model_1.default.findById(id).lean().exec();
        const updatedPrice = yield price_model_1.default.findByIdAndUpdate(busDetail === null || busDetail === void 0 ? void 0 : busDetail.priceId, ...req.body, { new: true });
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
//edit seatType
router.patch('/:id/seat', protect_1.default, authorise_1.default(["admin", "owner"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
router.delete('/:id', protect_1.default, authorise_1.default(["admin", "owner"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = req.params.id;
        const busDetail = yield bus_model_1.default.findById(id).lean().exec();
        yield price_model_1.default.findByIdAndDelete(busDetail === null || busDetail === void 0 ? void 0 : busDetail.priceId);
        let seatTypeId = (_a = busDetail === null || busDetail === void 0 ? void 0 : busDetail.seats) === null || _a === void 0 ? void 0 : _a.seatTypeId;
        seatTypeId === null || seatTypeId === void 0 ? void 0 : seatTypeId.map((item) => __awaiter(void 0, void 0, void 0, function* () { return yield seatType_model_1.default.findByIdAndDelete(item); }));
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
