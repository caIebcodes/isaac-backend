"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = __importDefault(require("node:crypto"));
function genString(length) {
    return node_crypto_1.default
        .randomBytes(length)
        .toString('hex')
        .split('')
        .slice(0, length)
        .join('');
}
exports.default = genString;
