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
          <img src={pokemons.url_image} />
          {pokemons.pokemon}
        </p>
      ))}
      <button onClick={handleClick2}>Previous Page</button>
      <button onClick={handleClick}>Next Page</button>
    </div>
  );
}
