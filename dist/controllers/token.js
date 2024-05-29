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
exports.getToken = void 0;
const axios_1 = __importDefault(require("axios"));
const node_querystring_1 = __importDefault(require("node:querystring"));
function getToken(code) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let res = {};
        const query = node_querystring_1.default.stringify({
            grant_type: "authorization_code",
            code: code,
            redirect_uri: ((_a = process.env.PRODUCTION) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == "true"
                ? "https://iauth.durev.net/callback"
                : `http://localhost:${process.env.PORT}/callback`,
            client_id: process.env.SPOTIFY_CLIENT_ID,
            client_secret: process.env.SPOTIFY_CLIENT_SECRET,
        });
        const time = new Date();
        yield axios_1.default
            .post(`https://accounts.spotify.com/api/token?${query}`)
            .then((r) => {
            res = {
                access_token: r.data.access_token,
                refresh_token: r.data.refresh_token,
                gen_time: time.getTime(),
            };
        })
            .catch((err) => {
            var _a;
            throw new Error(`Could not retrieve authentication token: ${(_a = err.response) === null || _a === void 0 ? void 0 : _a.statusText}`);
        });
        return res;
    });
}
exports.getToken = getToken;
