"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const callback_1 = __importDefault(require("../controllers/callback"));
exports.default = (0, express_1.Router)().get('/callback', callback_1.default);
