import pokemonRouter from "../module/pokemon/pokemon.router";

import { Route, Routes } from "./routes.type";

export const routes: Routes = [new Route("/pokemon", pokemonRouter)];
