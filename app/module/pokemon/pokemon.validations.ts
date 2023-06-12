import {
  body,
  checkNoOfAttacks,
  validator,
  checkDuplicateName,
  splittingWeakness,
  splittingAttacks
} from "../../utility/Validation";

export const PokemonValidator = [
  body("url"),
  body("name"),
  body("type"),
  body("evolutionCycle"),
  body("weakness"),
  body("attacks"),
  validator,
  splittingWeakness,
  splittingAttacks,
  checkNoOfAttacks,
  checkDuplicateName
  
];
