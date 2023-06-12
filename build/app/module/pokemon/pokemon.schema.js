"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSchema = void 0;
const pokemon_database_1 = require("./pokemon.database");
class pokemonSchema {
    create(pokemon) {
        pokemon_database_1.PokemonArr.push(Object.assign({}, pokemon));
        return true;
    }
    getOne() {
        if (pokemon_database_1.PokemonArr.length === 0 || pokemon_database_1.PokemonArr === null) {
            return -1;
        }
        const lengthPokemonArr = pokemon_database_1.PokemonArr.length - 1;
        const randomIndex = Math.floor(Math.random() * (lengthPokemonArr + 1));
        return pokemon_database_1.PokemonArr[randomIndex];
    }
    deleteOne(name) {
        const pokemonIndex = pokemon_database_1.PokemonArr.findIndex((a) => a.name === name);
        if (pokemonIndex) {
            pokemon_database_1.PokemonArr.splice(pokemonIndex, 1);
            return true;
        }
        return false;
    }
}
exports.PokemonSchema = new pokemonSchema();
//# sourceMappingURL=pokemon.schema.js.map