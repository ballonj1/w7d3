import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({ pokemon }) => {
  return (
    <Link to="/pokemon/:pokemonId">
      <li key={pokemon.id}>{pokemon.name}
        <br />
        <img width="50px" src={pokemon.image_url} alt="Pokemon"/>
      </li>
    </Link>
  );
};
