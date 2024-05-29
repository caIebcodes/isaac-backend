"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("../controllers/login"));
const express_1 = require("express");
exports.default = (0, express_1.Router)().get('/login', login_1.default);
