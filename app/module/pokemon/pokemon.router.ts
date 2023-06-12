import {
  Router,
  Request,
  Response as ExpressResponse,
  NextFunction,
} from "express";
import { IPokemon } from "./pokemon.type";
import { PokemonValidator } from "./pokemon.validations";
import PokemonService from "./pokemon.services";
import { Response } from "../../utility/Response-handler";
import { responseText } from "./pokemon.constant";

const router = Router();

// if(result === -1){
//     return res.status(404).send({ data: null, error: { message: "DATABASE EMPTY -> NO POKEMONS TO DISPLAY" } })
// }

router.get("/", (req, res, next) => {
  try {
    const didRecievePokemons = PokemonService.getOne();
    return res.send(new Response(didRecievePokemons));
  } catch (e) {
    next(e);
  }
});

router.post(
  "/",
  PokemonValidator,
  (req: Request, res: ExpressResponse, next: NextFunction) => {
    PokemonService.create(req.body as IPokemon);
    return res.send(new Response(responseText.created));
  }
);

router.delete("/:name", (req, res, next) => {
  try {
    const didDelete = PokemonService.deleteOne(req.params.name);
    return res.send(new Response(didDelete));
  } catch (e) {
    next(e);
  }
});

export default router;
