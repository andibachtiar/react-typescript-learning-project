import { useContext } from "react";
import { Pokemons } from "../types/PokemonTypes";
import { PokemonContext } from "../PokemonContext";

type TableRowProps = {
  pokemon: Pokemons;
};

export const TableRow = ({ pokemon }: TableRowProps) => {
  const { dispatch } = useContext(PokemonContext);

  function setSelectedPokemon(pokemon: Pokemons) {
    dispatch({ type: "setSelectedPokemon", payload: pokemon });
  }

  return (
    <tr key={pokemon.id} className="font-medium">
      <td>{pokemon.id}</td>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(" - ")}</td>
      <td>
        <button
          className="bg-indigo-500 rounded text-white py-1 px-2"
          onClick={() => setSelectedPokemon(pokemon)}
        >
          More info
        </button>
      </td>
    </tr>
  );
};
