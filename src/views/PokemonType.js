import {  useEffect, useReducer } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import PokemonList from '../components/PokemonList';
import './PokemonType.scss';


const POKEMON = {
  getdata : 'get-data'
}

const reducerPokemon = (state, action) => {

    if(action.type === POKEMON.getdata){
      return action.payload;
    }
    return state;
}

const PokemonType = () => {
  const { type } = useParams();
  const [pokemons, dispatchPokemons] = useReducer(reducerPokemon, []);

  useEffect(() =>{

    const getPokemon = async () => {
      const newPokemon = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
      dispatchPokemons({type: POKEMON.getdata, payload: newPokemon.data.pokemon.map(({ pokemon }) => pokemon)});
    }
    getPokemon();
  },[type])

  return (
    <div className='PokemonType'>

      <h2>Pokemon Type {type}</h2>
      <Link to="/"> Back to List</Link>

      <div className='PokemonType__content'>
        <PokemonList pokemons={pokemons} />
      </div>

    </div>
  );  
}

export default PokemonType;