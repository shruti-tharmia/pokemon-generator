"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_schema_1 = require("./pokemon.schema");
const pokemon_constant_1 = require("./pokemon.constant");
const create = (pokemon) => pokemon_schema_1.PokemonSchema.create(pokemon);
const getOne = () => {
    const pokemon = pokemon_schema_1.PokemonSchema.getOne();
    if (pokemon) {
        return pokemon;
    }
    throw pokemon_constant_1.responseText.notFound;
};
const deleteOne = (name) => {
    const didDelete = pokemon_schema_1.PokemonSchema.deleteOne(name);
    if (didDelete) {
        return didDelete;
    }
    throw pokemon_constant_1.responseText.notFound;
};
exports.default = {
    create,
    getOne,
    deleteOne,
};
//# sourceMappingURL=pokemon.services.js.map