import './PokemonList.scss'
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons }) => {
  return (
    
      <div className='PokemonList'>
        { pokemons.map(({ name }) => <PokemonItem key={name} name={name} />) }
      </div>
  )
}

export default PokemonList;