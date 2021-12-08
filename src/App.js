import { useState, useEffect } from 'react';
import { getPokemon } from './services/pokemon';
import PokeList from './components/PokeList';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoad(false);
    };
    if (load) {
      fetchData();
    }
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {load && <span className="loading"></span>}
      {!load && (
        <>
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
