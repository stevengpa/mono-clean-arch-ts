export type PokemonErrorInput = {
  code: string;
  message: string;
  metadata?: PokemonErrorMetaData;
};

export type PokemonErrorMetaData = {
  errors?: string[];
  statusCode?: number;
};

export class PokemonError extends Error {
  message: string = "";
  code: string = "";
  metadata: PokemonErrorMetaData = {};

  static new(input: PokemonErrorInput): PokemonError {
    const pokemonError = new PokemonError();
    pokemonError.message = input.message;
    pokemonError.code = input.code;
    pokemonError.metadata = input?.metadata ?? {};

    Error.captureStackTrace(this);

    return pokemonError;
  }
}
