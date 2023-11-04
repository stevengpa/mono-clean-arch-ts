import {
  HttpGetPort,
  PokemonError,
  pokemonId,
  PokemonId,
  pokemonName,
  PokemonName,
} from "@road/pokemon";
import { Either, isLeft, left, right } from "fp-ts/Either";

type PokemonPorts = {
  httpGet: HttpGetPort;
};

type PokemonRaw = {
  id: string;
  name: string;
};

type Pokemon = {
  id: PokemonId;
  name: PokemonName;
};

const pokemonsConnect = (pokemonsPorts: PokemonPorts) => {
  return async (): Promise<Either<PokemonError, Pokemon[]>> => {
    const BASE_URL = "https://pokeapi.co/api/v2";
    const response = await pokemonsPorts.httpGet<PokemonRaw[]>(
      `${BASE_URL}/pokemon?limit=10&offset=0`,
    );

    if (isLeft(response)) return response;

    const pokemons = response.right.map((rawPokemon: PokemonRaw) => {
      // TODO: Working on this function
      // const id = pokemonId(rawPokemon.id);
      const name = pokemonName(rawPokemon.name);
    });
  };
};
