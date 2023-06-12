import { IPokemon } from "./pokemon.type";
import { PokemonSchema } from "./pokemon.schema";
import { responseText } from "./pokemon.constant";

const create = (pokemon: IPokemon) => PokemonSchema.create(pokemon);

const getOne = () => {
  const pokemon = PokemonSchema.getOne();

  if (pokemon) {
    return pokemon;
  }

  throw responseText.notFound;
};

const deleteOne = (name: string) => {
  const didDelete = PokemonSchema.deleteOne(name);

  if (didDelete) {
    return didDelete;
  }
  throw responseText.notFound;
};

export default {
  create,
  getOne,
  deleteOne,
};
