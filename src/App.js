import { useState, useEffect } from 'react';
import { getPokemon } from './services/pokemon';
import PokeList from './components/PokeList';
import Controls from './components/Controls';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loading"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoad={setLoading} />
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
