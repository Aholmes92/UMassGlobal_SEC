import React from "react";
import "./index.css";
import Pokedex from "./Pokedex";

export default function App() {
  const defaultPokemon = [
    { id: 1, name: "Bulbasaur", type: "grass" },
    { id: 4, name: "Charmander", type: "fire" },
    { id: 6, name: "Charizard", type: "fire" },
    { id: 7, name: "Squirtle", type: "water" },
    { id: 9, name: "Blastoise", type: "water" },
    { id: 11, name: "Metapod", type: "bug" },
    { id: 12, name: "Butterfree", type: "flying" },
    { id: 25, name: "Pikachu", type: "electric" },
    { id: 39, name: "Jigglypuff", type: "normal" },
    { id: 94, name: "Gengar", type: "poison" },
    { id: 99, name: "Kingler", type: "water" },
    { id: 118, name: "Goldeen", type: "water" },
    { id: 133, name: "Eevee", type: "normal" },
    { id: 151, name: "MewTwo", type: "psychic" }
  ];

  return (
    <main className="container mx-auto p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">Pokédex</h1>
      <Pokedex pokemon={defaultPokemon} />
    </main>
  );
}