import { useContext, useReducer } from "react";
import { PokemonContext } from "../PokemonContext";

export const PokemonDetail = () => {
  const { state, dispatch } = useContext(PokemonContext);

  function resetSelectedPokemon() {
    dispatch({ type: "setSelectedPokemon", payload: null });
  }

  if (state.selectedPokemon === null) {
    return (
      <h3 className="m-2 text-xl text-center text-red-500 font-bold">
        NO POKEMON SELECTED
      </h3>
    );
  }

  return (
    <ul className="p-2 m-3 bg-violet-200 rounded">
      <button
        onClick={resetSelectedPokemon}
        className="bg-red-500 rounded text-white py-1 px-2"
      >
        dismiss
      </button>
      <li>
        Name: <b>{state.selectedPokemon.name.english}</b>
      </li>
      <li>
        Type: <b>{state.selectedPokemon.type.join(", ")}</b>
      </li>
      <li>Base stat.</li>
      <ul>
        <li>
          Attack : <b>{state.selectedPokemon.base.Attack} pts</b>
        </li>
        <li>
          Defence : <b>{state.selectedPokemon.base.Defense} pts</b>
        </li>
        <li>
          HP : <b>{state.selectedPokemon.base.HP} pts</b>
        </li>
        <li>
          Sp. Attack : <b>{state.selectedPokemon.base["Sp. Attack"]} pts</b>
        </li>
        <li>
          Sp. Defense : <b>{state.selectedPokemon.base["Sp. Defense"]} pts</b>
        </li>
        <li>
          Speed : <b>{state.selectedPokemon.base.Speed} pts</b>
        </li>
      </ul>
    </ul>
  );
};
