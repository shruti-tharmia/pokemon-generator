export interface IPokemon {
  url: string;
  name: string;
  type: string;
  evolutionCycle: string;
  weakness: string;
  attacks: string;
 
}

export class POKEMON_RESPONSE_MESSAGE {
  constructor(public statusCode: number, public message: string) {}
}
