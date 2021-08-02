import React, { useEffect, useState } from "react";
import "./App.css";
import { Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Buttons from "./Buttons";

function LiPokemons() {
  const [listapokemons, setListaPokemons] = useState([]);
  const [constantestate, setConstante] = useState(6);
  const [ListaPokemonsFiltrados, setListaPokemonsFiltrados] = useState(null);

  useEffect(() => {
    const getpokemonurl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonPromisesD = [];

    for (let i = 1; i <= constantestate; i++) {
      pokemonPromisesD.push(
        fetch(getpokemonurl(i)).then((response) => response.json())
      );
    }
    Promise.all(pokemonPromisesD).then((pokemon) => {
      setListaPokemonsFiltrados(pokemon);
    });
  }, [constantestate]);

  useEffect(() => {
    const getpokemonurl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonPromises = [];

    for (let i = 1; i <= 150; i++) {
      pokemonPromises.push(
        fetch(getpokemonurl(i)).then((response) => response.json())
      );
    }
    Promise.all(pokemonPromises).then((pokemon) => {
      setListaPokemons(pokemon);
    });
  }, []);

  const buttons = (tipo) => {
    let pokemontypes = [];
    if (tipo === "todos") {
      setListaPokemonsFiltrados(listapokemons);
    } else {
      ListaPokemonsFiltrados.forEach((pokemon) => {
        pokemon.types.forEach((id) => {
          if (id.type.name === tipo) {
            pokemontypes.push(pokemon);
          }
        });
      });
      setListaPokemonsFiltrados(pokemontypes);
    }
  };

  const enviar = async (event) => {
    const id = event.target.value;
    if (id === "") {
      setListaPokemonsFiltrados(listapokemons);
    } else {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      ).then((res) => {
        return res.json();
      });
      setListaPokemonsFiltrados([response]);
    }
  };

  return (
    <div>
      <div className="navbar">
        <div className="container-sub">
          <img
            src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1"
            alt="pokeapi"
          ></img>
        </div>
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
      {console.log(ListaPokemonsFiltrados)}
      {ListaPokemonsFiltrados ? (
        <div className="container">
          <ul className="pokedex">
            {ListaPokemonsFiltrados.map((pokemon) => {
              return (
                <li
                  className={`card ${
                    pokemon.types.map((typeInfo) => typeInfo.type.name)[0]
                  }`}
                  key={pokemon.id}
                >
                  <img
                    className="card-image"
                    alt={`${pokemon.name}`}
                    src={`${pokemon.sprites.front_default}`}
                  />
                  <h2 className="card-tittle">
                    {pokemon.id}. {pokemon.name}
                  </h2>
                  <p className="card-subtitle">
                    {pokemon.types
                      .map((typeInfo) => typeInfo.type.name)
                      .join(" | ")}
                  </p>
                </li>
              );
            })}
          </ul>
          <button
            className="ui primary button"
            onClick={() => setConstante(constantestate + 6)}
          >
            Carregar mais!
          </button>
        </div>
      ) : (
        <div>
          <ul className="pokedex">
            {listapokemons.map((pokemon) => {
              return (
                <li
                  className={`card ${
                    pokemon.types.map((typeInfo) => typeInfo.type.name)[0]
                  }`}
                  key={pokemon.id}
                >
                  <img
                    className="card-image"
                    alt={`${pokemon.name}`}
                    src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                  />
                  <h2 className="card-tittle">
                    {pokemon.id}. {pokemon.name}
                  </h2>
                  <p className="card-subtitle">
                    {pokemon.types
                      .map((typeInfo) => typeInfo.type.name)
                      .join(" | ")}
                  </p>
                </li>
              );
            })}
          </ul>
          <button
            className="ui primary button"
            onClick={() => setConstante(constantestate + 6)}
          >
            Carregar mais!
          </button>
        </div>
      )}
    </div>
  );
}
export default LiPokemons;
