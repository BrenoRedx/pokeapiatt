import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { HeaderComponent } from "../../../components/Header/index";

function PokemonsList() {
  const [listapokemons, setListaPokemons] = useState([]);
  const [constantestate, setConstante] = useState(7);
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

  console.log("teste");
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
    <>
      <HeaderComponent />
      {ListaPokemonsFiltrados ? (
        <div className="container" style={{ marginTop: "4rem" }}>
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
                  <button className="ui primary button">
                    <Link to={`/sobre/${pokemon.id}`} className="colorLink">
                      Status
                    </Link>
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            className="ui primary button"
            onClick={() => setConstante(constantestate + 7)}
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
                  <button className="ui primary button">
                    <Link to="/sobre" className="colorLink">
                      Status
                    </Link>
                  </button>
                </li>
              );
            })}
          </ul>
          <br></br>
          <button
            className="ui primary button"
            onClick={() => setConstante(constantestate + 7)}
          >
            Carregar mais!
          </button>
        </div>
      )}
    </>
  );
}
export default PokemonsList;
