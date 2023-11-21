"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_http_proxy_1 = __importDefault(require("express-http-proxy"));
const app = (0, express_1.default)();
app.use("/customer", (0, express_http_proxy_1.default)("http://localhost:3002"));
app.use("/shopping", (0, express_http_proxy_1.default)("http://localhost:3001"));
app.use("/", (0, express_http_proxy_1.default)("http://localhost:3000"));
// app.get("/", (req, res, next) => {
//   res.send("Hey there");
// });
app.listen(3003, () => {
    console.log("Gateway on 3003");
});
