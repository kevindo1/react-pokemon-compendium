import { useState, useEffect } from 'react';
import { getPokemon } from './services/pokemon';
import PokeList from './components/PokeList';
import Controls from './components/Controls';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, page);
      setPokemon(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, page]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            order={order}
            setOrder={setOrder}
            page={page}
            setPage={setPage}
          />
          <PokeList pokemon={pokemon} page={page} setPage={setPage} setLoading={setLoading} />
        </>
      )}
    </div>
  );
}

export default App;
