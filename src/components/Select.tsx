import { ChangeEvent, useContext, useState } from "react";
import { PokemonContext } from "../PokemonContext";

type SelectProps = {} & React.ComponentProps<"select">;

export const Select = ({ ...rest }: SelectProps) => {
  const { state, dispatch } = useContext(PokemonContext);
  const pageOptions: number = Math.ceil(state.pokemon.length / 10);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "setPage", payload: parseInt(event.target.value) });
  };

  let inputOptions: JSX.Element[] = [];
  for (let i = 1; i <= pageOptions; i++) {
    inputOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return (
    <select {...rest} onChange={handleChange}>
      {inputOptions}
    </select>
  );
};
