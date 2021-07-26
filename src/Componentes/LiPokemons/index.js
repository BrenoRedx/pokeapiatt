function LiPokemons(pokemon) {
  return (
    <div>
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

export default LiPokemons;
