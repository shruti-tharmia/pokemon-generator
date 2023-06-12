"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesRegister = void 0;
const express_1 = require("express");
const routes_data_1 = require("./routes.data");
const Response_handler_1 = require("../utility/Response-handler");
const cors_1 = __importDefault(require("cors"));
const express_2 = __importDefault(require("express"));
const path = require('path');
const routesRegister = (app) => {
    // console.log(path.join(__dirname, "..","..","../FRONTEND"))
    const staticPath = path.join(path.join(__dirname, "..", "..", "../FRONTEND"));
    app.use(express_2.default.static(staticPath));
    app.use((0, express_1.json)());
    app.use((0, cors_1.default)());
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((response, req, res, next) => {
        return res
            .status(response.statusCode || 500)
            .send(new Response_handler_1.Response(null, response));
    });
};
exports.routesRegister = routesRegister;
//# sourceMappingURL=routes.register.js.map