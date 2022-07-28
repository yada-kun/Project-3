
import './App.scss';
import { Navigate, Route , Routes } from 'react-router-dom'
import Pokemon from './views/Pokemon';
import PokemonType from './views/PokemonType';
import NotFound from './views/NotFound';
import PokemonDetail from './views/PokemonDetail';


const  App = () =>{


  return (
   
    <Routes>
      <Route path="/" element={<Navigate to = "/pokemon" />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/types/:type" element={<PokemonType />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )

}

export default App;