import { useReducer, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './PokemonDetail.scss';

const POKEMON = {
  getdata : 'get-data'
}

const reducerPokemon = (state, action) => {

    if(action.type === POKEMON.getdata){
      return action.payload;
    }
    return state;
}


const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemonData, dispatchPokemons] = useReducer(reducerPokemon, null);

  useEffect(() => {
  const getPokemonName = async () => {
    const newPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    dispatchPokemons({type: POKEMON.getdata, payload: newPokemon.data});

  }
  
  getPokemonName();
},[name])

  return (
    <div>
      { 
        pokemonData &&
        (
          
          <div className='PokemonDetail'>
           <Link to="/">Back to Pokemon List</Link>
            
            <div className='PokemonDetail__content'>

              <img src={pokemonData.sprites.front_default} alt={name} />
              <p>{name}</p>

            </div>
          </div>
        )
      }
    </div>
  )
}

export default PokemonDetail;