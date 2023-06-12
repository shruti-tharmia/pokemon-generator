"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const routes_register_1 = require("./routes/routes.register");
const startServer = () => {
    const app = (0, express_1.default)();
    // console.log(path.join(__dirname, ".."))
    // app.use();
    (0, routes_register_1.routesRegister)(app);
    const { PORT } = process.env;
    app.listen(PORT, () => console.log(`SERVER IS LISTENING ON PORT ${PORT}`));
};
exports.startServer = startServer;
//# sourceMappingURL=app.js.map