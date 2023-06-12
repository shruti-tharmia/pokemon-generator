"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonValidator = void 0;
const Validation_1 = require("../../utility/Validation");
exports.PokemonValidator = [
    (0, Validation_1.body)("url"),
    (0, Validation_1.body)("name"),
    (0, Validation_1.body)("type"),
    (0, Validation_1.body)("evolutionCycle"),
    (0, Validation_1.body)("weakness"),
    (0, Validation_1.body)("attacks"),
    Validation_1.validator,
    Validation_1.splittingWeakness,
    Validation_1.splittingAttacks,
    Validation_1.checkNoOfAttacks,
    Validation_1.checkDuplicateName
];
//# sourceMappingURL=pokemon.validations.js.map