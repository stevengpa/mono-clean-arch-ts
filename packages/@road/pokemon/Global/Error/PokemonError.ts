export type PokemonErrorInputs = {
  code: string;
  message: string;
};

export function pokemonError(inputs: PokemonErrorInputs): Error {
  return new Error(JSON.stringify(inputs));
}
