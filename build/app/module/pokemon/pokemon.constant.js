"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseText = void 0;
const pokemon_type_1 = require("./pokemon.type");
exports.responseText = {
    notFound: new pokemon_type_1.POKEMON_RESPONSE_MESSAGE(404, "POKEMON NOT FOUND"),
    created: new pokemon_type_1.POKEMON_RESPONSE_MESSAGE(201, "POKEMON CREATED"),
    deleted: new pokemon_type_1.POKEMON_RESPONSE_MESSAGE(200, "POKEMON DELETED"),
};
//# sourceMappingURL=pokemon.constant.js.map