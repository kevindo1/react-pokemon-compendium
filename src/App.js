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
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
