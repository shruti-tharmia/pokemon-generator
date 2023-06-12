"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splittingAttacks = exports.splittingWeakness = exports.checkDuplicateName = exports.checkNoOfAttacks = exports.validator = exports.body = void 0;
const pokemon_database_1 = require("../module/pokemon/pokemon.database");
const validateFunc = (key) => {
    return (req, res, next) => {
        // if(key === 'name' && (typeof(req.body.name)!== "string")){
        //     return next({message: 'THE NAME HAS TO BE STRING'});
        // }
        const value = req.body[key];
        if (!value) {
            res.locals = Object.assign(Object.assign({}, res.locals), { [key]: `${key} is invalid` });
        }
        next();
    };
};
const body = (key) => validateFunc(key);
exports.body = body;
const validator = (req, res, next) => {
    if (Object.keys(res.locals).length) {
        return next(res.locals);
    }
    next();
};
exports.validator = validator;
const checkNoOfAttacks = (req, res, next) => {
    if ((req.body.attacks).length >= 3) {
        return next();
    }
    next({ message: "Please enter 3 or more attacks" });
};
exports.checkNoOfAttacks = checkNoOfAttacks;
const checkDuplicateName = (req, res, next) => {
    for (let pokemon of pokemon_database_1.PokemonArr) {
        if (pokemon.name === req.body.name) {
            return next({ message: "Duplicate element can't be added" });
        }
    }
    next();
};
exports.checkDuplicateName = checkDuplicateName;
const splittingWeakness = (req, res, next) => {
    req.body.weakness = (req.body.weakness).split(',');
    next();
};
exports.splittingWeakness = splittingWeakness;
const splittingAttacks = (req, res, next) => {
    req.body.attacks = (req.body.attacks).split(',');
    next();
};
exports.splittingAttacks = splittingAttacks;
//# sourceMappingURL=Validation.js.map