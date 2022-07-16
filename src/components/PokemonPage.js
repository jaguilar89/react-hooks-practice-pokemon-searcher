import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/pokemon');
      const pokemonData = await res.json();
      setPokemon(pokemonData);
    })()
  }, []);

  function handleAddPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon])
  }
  function handleSearch(event) {
    setSearch(event.target.value)
  };

  const pokemonToDisplay = pokemon.filter((pokeCard) => {
    return pokeCard.name.toLowerCase().includes(search.toLowerCase())
  });

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={pokemonToDisplay}/>
    </Container>
  );
}

export default PokemonPage;
