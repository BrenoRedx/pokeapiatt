import React, { useEffect, useState } from "react";
import { api } from "../../../service/api";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { HeaderComponent } from "../../../components/Header/index";
import { PokeCard } from "../../../components/Card/index";

function PokemonsList() {
  const [listGetPokemons, setListGetPokemons] = useState([]);

  const loadApi = async () => {
    await api
      .get(`?limit=20`)
      .then((res) => {
        loadAPIData(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadApi();
  }, []);

  const loadAPIData = async (results) => {
    // let ArrayPokemonsData = []; ArrayPokemonsData.push(res.data);
    await results.forEach((response) => {
      api.get(`${response.name}`).then((res) => {
        setListGetPokemons((oldArray) => [...oldArray, res.data]);
      });
    });
  };

  return (
    <>
      <HeaderComponent />
      <PokeCard listGetPokemons={listGetPokemons} />
      <div className="container" style={{ marginTop: "4rem" }}>
        <ul>
          {/* {listGetPokemons.map((pokemon, key) => {
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
          })} */}
        </ul>
      </div>
    </>
  );
}
export default PokemonsList;
