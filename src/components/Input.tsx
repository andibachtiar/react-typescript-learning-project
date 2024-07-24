import { useContext } from "react";
import { PokemonContext } from "../PokemonContext";

type InputProps = {} & React.ComponentProps<"input">;

export const Input = ({ ...rest }: InputProps) => {
  const { state, dispatch } = useContext(PokemonContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setFilter", payload: e.target.value });
  };

  return <input {...rest} onChange={handleSearch} />;
};
