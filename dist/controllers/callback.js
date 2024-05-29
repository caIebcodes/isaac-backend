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
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("./token");
function callback(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const code = String(req.query.code);
        if (code) {
            let query = {
                access_token: '',
                refresh_token: '',
                gen_time: 0,
            };
            try {
                yield (0, token_1.getToken)(code).then((r) => {
                    query.access_token = r.access_token;
                    query.refresh_token = r.refresh_token;
                    query.gen_time = r.gen_time;
                });
            }
            catch (err) {
                res.status(401).json({
                    status: 'error',
                    message: err,
                });
            }
            ((_a = process.env.PRODUCTION) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == 'true'
                ? res.redirect(`https://isaac.durev.net/auth?token=${query.access_token}&refresh_token=${query.refresh_token}&gen_time=${query.gen_time}`)
                : res.redirect(`http://localhost:3000/auth?access_token=${query.access_token}&refresh_token=${query.refresh_token}&gen_time=${query.gen_time}`);
        }
        //
        else
            res.status(401).json({
                status: 'error',
                message: 'Could not authenticate. Please try again',
            });
    });
}
exports.default = callback;
