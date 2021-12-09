import React from 'react';

export default function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((pokemons) => (
        <p key={pokemons.id}>
          <img src={pokemons.url_image} />
          {pokemons.pokemon}
        </p>
      ))}
    </div>
  );
}
