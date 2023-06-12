import { POKEMON_RESPONSE_MESSAGE } from "./pokemon.type";

export const responseText = {
  notFound: new POKEMON_RESPONSE_MESSAGE(404, "POKEMON NOT FOUND"),
  created: new POKEMON_RESPONSE_MESSAGE(201, "POKEMON CREATED"),
  deleted: new POKEMON_RESPONSE_MESSAGE(200, "POKEMON DELETED"),
};
