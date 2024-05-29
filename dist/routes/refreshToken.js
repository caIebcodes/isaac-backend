"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const refreshToken_1 = __importDefault(require("../controllers/refreshToken"));
const express_1 = require("express");
exports.default = (0, express_1.Router)().get('/refresh_token', refreshToken_1.default);
