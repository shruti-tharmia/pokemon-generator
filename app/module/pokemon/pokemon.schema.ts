import { IPokemon } from "./pokemon.type";
import { PokemonArr } from "./pokemon.database";

class pokemonSchema {
  create(pokemon: IPokemon) {
    PokemonArr.push({ ...pokemon});
    return true;
  }

  getOne() {
    if (PokemonArr.length === 0 || PokemonArr === null) {
      return -1;
    }

    const lengthPokemonArr = PokemonArr.length - 1;
    const randomIndex = Math.floor(Math.random() * (lengthPokemonArr + 1));
    return PokemonArr[randomIndex];
  }

  deleteOne(name: string) {
    const pokemonIndex = PokemonArr.findIndex((a) => a.name === name);
    if (pokemonIndex) {
      PokemonArr.splice(pokemonIndex, 1);
      return true;
    }
    return false;
  }
}

export const PokemonSchema = new pokemonSchema();
