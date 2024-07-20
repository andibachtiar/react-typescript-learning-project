import { useState } from "react";
import { Pokemons } from "../types/PokemonTypes";

type PokemomTableProps = {
  pokemons: Pokemons[];
  page: number;
};

export const PokemomTable = ({ pokemons, page }: PokemomTableProps) => {
  const [selectedItem, setSelectedItem] = useState<Pokemons | null>(null);

  const selectItem = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    const selectedItem = pokemons.filter((pokemon) => {
      return pokemon.id === id;
    });

    if (selectedItem.length > 0) {
      setSelectedItem(selectedItem[0]);
    }
  };

  return (
    <div>
      {selectedItem && (
        <ul>
          <button onClick={() => setSelectedItem(null)}>clear</button>
          <li>Name: {selectedItem.name.english}</li>
          <li>Type: {selectedItem.type.join(", ")}</li>
          <li>Base stat.</li>
          <ul
            style={{
              fontWeight: 500,
            }}
          >
            <li>Attack : {selectedItem.base.Attack} pts</li>
            <li>Defence : {selectedItem.base.Defense} pts</li>
            <li>HP : {selectedItem.base.HP} pts</li>
            <li>Attack Speed : {selectedItem.base["Sp. Attack"]} pts</li>
            <li>Defence Speed : {selectedItem.base["Sp. Defense"]} pts</li>
            <li>Speed : {selectedItem.base.Speed} pts</li>
          </ul>
        </ul>
      )}

      <table width="100%">
        <thead>
          <tr>
            <th>No. </th>
            <th>Name</th>
            <th>Types</th>
          </tr>
        </thead>
        <tbody>
          {pokemons
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((pokemon) => {
              return (
                <tr key={pokemon.id}>
                  <td>{pokemon.id}</td>
                  <td>{pokemon.name.english}</td>
                  <td>{pokemon.type.join(" - ")}</td>
                  <td>
                    <button onClick={(e) => selectItem(e, pokemon.id)}>
                      select!
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
