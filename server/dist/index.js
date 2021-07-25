"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./controllers/auth.controller");
const bus_controller_1 = __importDefault(require("./controllers/bus.controller"));
const passport = require('./config/passport');
const app = express_1.default();
app.use(express_1.default.json());
app.use(passport.initialize());
passport.serializeUser(function (user, done) {
    done(null, 'user');
});
passport.deserializeUser(function (id, done) {
    done(null, 'user');
});
app.post('/register', auth_controller_1.register);
app.post('/login', auth_controller_1.login);
app.use('/bus', bus_controller_1.default);
app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
    res.status(201).json({ status: 'success', token: req.user.token });
});
exports.default = app;
