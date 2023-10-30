import { ErrorObject } from "ajv";

export type PokemonErrorInputs = {
  code: string;
  message: string;
};

export function pokemonError(inputs: Object): Error {
  return new Error(JSON.stringify(inputs));
}

export function pokemonErrors(key: string, errors: ErrorObject[]): string[] {
  return errors.map((error: ErrorObject) => `[${key}]: ${error.message}`);
}
