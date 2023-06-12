"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_validations_1 = require("./pokemon.validations");
const pokemon_services_1 = __importDefault(require("./pokemon.services"));
const Response_handler_1 = require("../../utility/Response-handler");
const pokemon_constant_1 = require("./pokemon.constant");
const router = (0, express_1.Router)();
// if(result === -1){
//     return res.status(404).send({ data: null, error: { message: "DATABASE EMPTY -> NO POKEMONS TO DISPLAY" } })
// }
router.get("/", (req, res, next) => {
    try {
        const result = pokemon_services_1.default.getOne();
        return res.send(new Response_handler_1.Response(result));
    }
    catch (e) {
        next(e);
    }
});
router.post("/", pokemon_validations_1.PokemonValidator, (req, res, next) => {
    const result = pokemon_services_1.default.create(req.body);
    return res.send(new Response_handler_1.Response(pokemon_constant_1.responseText.created));
});
router.delete("/:name", (req, res, next) => {
    try {
        const result = pokemon_services_1.default.deleteOne(req.params.name);
        return res.send(new Response_handler_1.Response(result));
    }
    catch (e) {
        next(e);
    }
});
exports.default = router;
//# sourceMappingURL=pokemon.router.js.map