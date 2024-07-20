import React, { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Select } from "./components/Select";
import { PokemomTable } from "./components/Table";
import { Pokemons } from "./types/PokemonTypes";
import { log } from "console";

function App() {
  const [pokemon, setPokemon] = useState<Pokemons[]>([]);
  const pageOptions: number = Math.ceil(pokemon.length / 10);

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(parseInt(event.target.value));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/pokemon.json");
        let data: Pokemons[] = await response.json();

        if (filter !== "") {
          data = data.filter((item) => {
            return item.name.english
              .toLowerCase()
              .includes(filter.toLocaleLowerCase());
          });
        }
        setPokemon(data);
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    };
    fetchData();
  }, [filter]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  // pokemons = pokemons.filter((pokemon) => {
  //   return pokemon.name.english
  //     .toLowerCase()
  //     .includes(filter.toLocaleLowerCase());
  // });

  return (
    <div className="App">
      <h1
        className="title"
        style={{
          margin: "auto",
          width: "100%",
          paddingTop: "2rem",
        }}
      >
        Pokemon
      </h1>

      <input onChange={handleSearch} value={filter} />

      <Select pageOptions={pageOptions} handleChange={handleChange} />

      <PokemomTable pokemons={pokemon} page={page} />
    </div>
  );
}

export default App;
