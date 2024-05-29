"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_querystring_1 = __importDefault(require("node:querystring"));
require("dotenv/config");
const genString_1 = __importDefault(require("../utils/genString"));
function login(req, res) {
    var _a;
    const state = (0, genString_1.default)(16);
    const scope = "user-read-private user-top-read user-follow-modify user-read-recently-played user-read-playback-position playlist-read-collaborative streaming user-read-playback-state playlist-modify-public user-library-modify user-follow-read user-read-currently-playing user-library-read playlist-read-private playlist-modify-private";
    res.redirect("https://accounts.spotify.com/authorize?" +
        node_querystring_1.default.stringify({
            response_type: "code",
            client_id: process.env.SPOTIFY_CLIENT_ID,
            scope,
            redirect_uri: ((_a = process.env.PRODUCTION) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == "true"
                ? "https://iauth.durev.net/callback"
                : `http://localhost:${process.env.PORT}/callback`,
            state,
            show_dialog: false,
        }));
}
exports.default = login;
