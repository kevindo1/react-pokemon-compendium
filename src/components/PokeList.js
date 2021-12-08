import React from 'react';

export default function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((pokemons) => (
        <p key={pokemons.id}>{pokemons.pokemon}</p>
      ))}
    </div>
  );
}
