import { Request, Response, NextFunction } from "express";
import { PokemonArr } from "../module/pokemon/pokemon.database";
const validateFunc = (key: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // if(key === 'name' && (typeof(req.body.name)!== "string")){
    //     return next({message: 'THE NAME HAS TO BE STRING'});
    // }
    const value = req.body[key];
    if (!value) {
      res.locals = { ...res.locals, [key]: `${key} is invalid` };
    }
    next();
  };
};

export const body = (key: string) => validateFunc(key);

export const validator = (req: Request, res: Response, next: NextFunction) => {
  if (Object.keys(res.locals).length) {
    return next(res.locals);
  }
  next();
};

export const checkNoOfAttacks = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((req.body.attacks).length >= 3) {
    return next();
  }
  next({ message: "Please enter 3 or more attacks" });
};

export const checkDuplicateName = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  for (let pokemon of PokemonArr) {
    if (pokemon.name === req.body.name) {
      return next({ message: "Duplicate element can't be added" });
    }
  }
  next();
};


export const splittingWeakness = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body.weakness =  (req.body.weakness).split(',');  
  next();
};

export const splittingAttacks = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body.attacks =  (req.body.attacks).split(',');  
  next();
};


