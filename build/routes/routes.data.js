"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const pokemon_router_1 = __importDefault(require("../app/module/pokemon/pokemon.router"));
const routes_type_1 = require("./routes.type");
exports.routes = [new routes_type_1.Route("/pokemon", pokemon_router_1.default)];
//# sourceMappingURL=routes.data.js.map