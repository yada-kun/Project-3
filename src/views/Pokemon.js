import './Pokemon.scss';
import {  useEffect, useReducer } from 'react';
import axios from 'axios';
import Filters from '../components/Filters';

const POKEMON = {
  getdata : 'get-data'
}

const reducerPokemon = (state, action) => {

    if(action.type === POKEMON.getdata){
      return action.payload;
    }
    return state;
}

const Pokemon = () => {

  const [pokemonData, dispatchPokemons] = useReducer(reducerPokemon, []);

    useEffect(() =>{

    const getPokemon = async () => {
      const newPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
      dispatchPokemons({type: POKEMON.getdata, payload: newPokemon.data.results});

    }
    
    getPokemon();
  },[])

  return (
    <>
        <h1>Pokemon</h1>
    <div className='Pokemon-container'>
    
        <Filters />
    </div>
    </>
  )
}

export default Pokemon;