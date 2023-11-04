import axios, { AxiosError } from "axios";
import { Either, right, left } from "fp-ts/Either";

import { convertToPokemonError } from "./convertToPokemonError";
import { PokemonError } from "../Error/PokemonError";

export async function httpGetAdapter<T>(
  url: string,
): Promise<Either<PokemonError, T>> {
  try {
    const response = await axios.get<T>(url).then((response) => response.data);
    return right(response);
  } catch (err) {
    const pokemonError = convertToPokemonError(err as AxiosError | Error);
    return left(pokemonError);
  }
}
