import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Filters = () => {
  
  const [pokemonTypes , setPokemonTypes] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type').then((response) => {
      setPokemonTypes(response.data.results)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <div className='Filter-content'>
      <ul>
        {
        pokemonTypes.map(({ name }) => { 
          return (
            <li key={name}>
              <Link to={`/types/${name}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}


export default Filters;