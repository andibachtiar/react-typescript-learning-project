import { createContext, useReducer } from "react";
import {
  PokemonAction,
  PokemonReducer,
  PokemonState,
  intialPokemonState,
} from "./reducers/PokemonReducer";

type PokemonContextInterface = {
  state: PokemonState;
  dispatch: React.Dispatch<PokemonAction>;
};

const defaultState = {
  state: intialPokemonState,
  dispatch: (): void => {},
} as PokemonContextInterface;

export const PokemonContext =
  createContext<PokemonContextInterface>(defaultState);

type PokemonProviderProps = {
  children: React.ReactNode;
};

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [state, dispatch] = useReducer(PokemonReducer, intialPokemonState);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};
