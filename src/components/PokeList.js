import React from 'react';

export default function PokeList({ pokemon, setLoading, setPage }) {
  const handleClick = () => {
    setLoading(true);
    setPage((prevState) => ++prevState);
  };
  const handleClick2 = () => {
    setLoading(true);
    setPage((prevState) => --prevState);
  };
  return (
    <div>
      {pokemon.map((pokemons) => (
        <p key={pokemons.id}>
          <span>{pokemons.pokemon} </span>
          <span>Type: {pokemons.type_1} </span>
          <img src={pokemons.url_image} />
          <span>HP: {pokemons.hp} </span>
          <span>ATK: {pokemons.attack} </span>
          <span>DEF: {pokemons.defense} </span>
        </p>
      ))}
      <button onClick={handleClick2}>Previous Page</button>
      <button onClick={handleClick}>Next Page</button>
    </div>
  );
}
