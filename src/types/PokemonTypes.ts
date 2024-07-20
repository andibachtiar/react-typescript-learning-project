export type PokemonNames = {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
};

export type PokemonBases = {
  HP: number;
  Attack: number;
  Defense: number;
  "Sp. Attack": number;
  "Sp. Defense": number;
  Speed: number;
};

export type Pokemons = {
  id: number;
  name: PokemonNames;
  type: string[];
  base: PokemonBases;
};
