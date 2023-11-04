import { Either } from "fp-ts/Either";
import { PokemonError } from "../Error/PokemonError";

export type HttpGetPort = <T>(url: string) => Promise<Either<PokemonError, T>>;
