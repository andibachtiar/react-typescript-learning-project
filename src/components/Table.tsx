import { useContext, useEffect, useState } from "react";
import { Pokemons } from "../types/PokemonTypes";
import { PokemonDetail } from "./PokemonDetail";
import { TableRow } from "./TableRow";
import { PokemonContext } from "../PokemonContext";

export const PokemomTable = () => {
  const [selectedItem, setSelectedItem] = useState<Pokemons | null>(null);

  const { state, dispatch } = useContext(PokemonContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/pokemon.json");
        let data: Pokemons[] = await response.json();

        if (state.filter !== "") {
          data = data.filter((item) =>
            item.name.english.toLowerCase().includes(state.filter.toLowerCase())
          );
        }
        dispatch({ type: "setPokemon", payload: data });
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    };
    fetchData();
  }, [state.filter]);

  const selectItem = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    const selectedItem = state.pokemon.filter((poke) => {
      return poke.id === id;
    });
    if (selectedItem.length > 0) {
      dispatch({ type: "setSelectedPokemon", payload: selectedItem[0] });
    }
  };

  return (
    <div>
      <PokemonDetail />

      <table width="100%">
        <thead>
          <tr>
            <th>No. </th>
            <th>Name</th>
            <th>Types</th>
          </tr>
        </thead>
        <tbody className="">
          {state.pokemon
            .slice((state.page - 1) * 10, (state.page - 1) * 10 + 10)
            .map((poke) => {
              return <TableRow key={poke.id} pokemon={poke} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
