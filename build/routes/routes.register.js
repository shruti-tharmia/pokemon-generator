"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesRegister = void 0;
const express_1 = require("express");
const routes_data_1 = require("./routes.data");
const Response_handler_1 = require("../app/utility/Response-handler");
const routesRegister = (app) => {
    app.use((0, express_1.json)());
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