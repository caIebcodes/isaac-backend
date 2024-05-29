"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const callback_1 = __importDefault(require("./routes/callback"));
const login_1 = __importDefault(require("./routes/login"));
var cors = require("cors");
const refreshToken_1 = __importDefault(require("./routes/refreshToken"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use("/", login_1.default);
app.use("/", callback_1.default);
app.use("/", refreshToken_1.default);
app.get("/", (_, res) => {
    res.redirect("/login");
});
app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT);
});
