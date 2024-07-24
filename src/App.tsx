import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Select } from "./components/Select";
import { PokemomTable } from "./components/Table";
import { Pokemons } from "./types/PokemonTypes";
import { PokemonContext, PokemonProvider } from "./PokemonContext";
import { Input } from "./components/Input";

function App() {
  return (
    <PokemonProvider>
      <div className="App bg-slate-200 min-h-screen">
        <h1 className="title mx-auto w-full pt-2 text-4xl font-bold mb-5">
          Pokemon
        </h1>
        <Input className="p-2 rounded w-72" />
        <Select className="ml-4 p-2 rounded w-12" />
        <PokemomTable />
      </div>
    </PokemonProvider>
  );
}

export default App;
