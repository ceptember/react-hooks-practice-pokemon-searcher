import React from "react";
import PokemonPage from "./PokemonPage";

function App() {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;

/*

App
  |--PokemonPage (fetch pokemon, state for all pokemon, state for pokemon to show, pass down to pokemonCollection)
      |---Container
      |---PokemonForm (give it state for a controlled form with onChange events. onSubmit, pass new pokemon up to PokemonPage)
      |---Search (filter pokemon to show in collection, pass up to PokemonPage)
      |---PokemonCollection (Render each pokemon in a card)
        |---PokemonCard  (main DOM element has an onClick, toggles in state front/back image)


*/