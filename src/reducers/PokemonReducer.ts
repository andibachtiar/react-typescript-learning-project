import { Pokemons } from "../types/PokemonTypes";

export interface PokemonState {
  pokemon: Pokemons[];
  selectedPokemon: Pokemons | null;
  page: number;
  filter: string;
}

export type PokemonAction =
  | { type: "setPokemon"; payload: Pokemons[] }
  | { type: "setSelectedPokemon"; payload: Pokemons | null }
  | { type: "setPage"; payload: number }
  | { type: "setFilter"; payload: string };

export const intialPokemonState: PokemonState = {
  pokemon: [],
  selectedPokemon: null,
  page: 1,
  filter: "",
};

export const PokemonReducer = (
  state: PokemonState,
  action: PokemonAction
): PokemonState => {
  switch (action.type) {
    case "setPokemon":
      return { ...state, pokemon: action.payload };
    case "setSelectedPokemon":
      return { ...state, selectedPokemon: action.payload };
    case "setPage":
      return { ...state, page: action.payload };
    case "setFilter":
      return { ...state, filter: action.payload };
    default:
      throw new Error("No action");
  }
};
