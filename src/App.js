import React, { useState, useEffect } from "react";
import "./App.css";
import { Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Buttons from "./Componentes/Buttons";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [listaPokemon, setListaPokemon] = useState([]);

  useEffect(() => {
    const getpokemonurl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonPromises = [];

    for (let i = 1; i <= 150; i++) {
      pokemonPromises.push(
        fetch(getpokemonurl(i)).then((response) => response.json())
      );
    }

    Promise.all(pokemonPromises).then((pokemons) => {
      liPokemons(pokemons);
      setListaPokemon(pokemons);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

  const liPokemons = (pokemons) => {
    const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
      const types = pokemon.types.map((typeInfo) => typeInfo.type.name);
      accumulator += `
        <li  class = "card ${types[0]}">
        <img class = "card-image"  alt = "${
          pokemon.name
        }" src = "https://pokeres.bastionbot.org/images/pokemon/${
        pokemon.id
      }.png"/>
        <h2  class = "card-tittle">${pokemon.id}. ${pokemon.name}</h2>
        <p   class = "card-subtitle">${pokemon.types
          .map((typeInfo) => typeInfo.type.name)
          .join(" | ")}</p>
        </li>
        `;
      return accumulator;
    }, "");
    const ul = document.querySelector('[data-js="pokedex"]');

    if (!pokemon) {
      ul.innerHTML = lisPokemons;
    }
  };

  const buttons = (tipo) => {
    let pokemontypes = [];
    listaPokemon.forEach((pokemon) => {
      pokemon.types.forEach((id) => {
        if (id.type.name === tipo) {
          pokemontypes.push(pokemon);
        }
      });
    });
    liPokemons(pokemontypes);
  };

  const enviar = async (event) => {
    const id = event.target.value;
    if (id === "") {
      setPokemon(null);
    } else {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      ).then((res) => {
        return res.json();
      });
      console.log(response);
      setPokemon(response);
    }
  };

  return (
    <div>
      <div className="navbar">
        <b>Pokedex PokeAPI</b>
      </div>
      <div className="Pesquisa">
        <Form>
          <Form.Group>
            <Form.Input
              placeholder="Nome de usuário"
              name="Pokemon"
              onChange={enviar}
            />
            <Form.Button content="Search" />
          </Form.Group>
        </Form>
      </div>
      <Buttons buttons={buttons} />

      {pokemon ? (
        <div>
          <li className={`card ${pokemon.types[0]}`}>
            <img
              className="card-image"
              alt={pokemon.name}
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
            />
            <h2 className="card-tittle">
              {pokemon.id}. {pokemon.name}
            </h2>
            <p className="card-subtitle">
              {pokemon.types.map((typeInfo) => typeInfo.type.name).join(" | ")}
            </p>
          </li>
        </div>
      ) : (
        <ul data-js="pokedex" className="pokedex"></ul>
      )}
    </div>
  );
}
export default App;
