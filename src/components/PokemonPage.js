import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemonToShow, setPokemonToShow] = useState([]); 

  useEffect( () => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then (data => {
      setAllPokemon(data);
      setPokemonToShow(data);
    })
  }, [])

  function filterResults(searched){
    const filteredPokemon = allPokemon.filter( (pok) => pok.name.toLowerCase().includes(searched.toLowerCase()));
    setPokemonToShow(filteredPokemon)
  }

  function handleAddNew(pok){
    const updatedArray = [...allPokemon, pok];
    setAllPokemon(updatedArray);
    setPokemonToShow(updatedArray)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddNew={handleAddNew}/>
      <br />
      <Search onSearch={filterResults}/>
      <br />
      <PokemonCollection pokemon={pokemonToShow} />
    </Container>
  );
}

export default PokemonPage;
