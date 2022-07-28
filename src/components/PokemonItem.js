import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PokemonItem.scss';

const PokemonItem = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
      setPokemon(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, [name]);

  return (
    <>
    {
      pokemon && 
      (
        <div className='PokemonItem'>

          <Link to={`/pokemon/${name}`}>
            <img src={pokemon.sprites.front_default} alt={name} />
            <p>Pokemon Name: {pokemon.name}</p>
            <p>Types: {pokemon.types.map(({ type }) => type.name).join(', ')}</p>

          </Link>
        </div>
      )
    }
    </>
  );
}

export default PokemonItem;
