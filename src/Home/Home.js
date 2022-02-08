import { useState, useEffect } from 'react';
import { getPokemon, getTypes } from '../services/pokemon';
import PokeList from '../components/PokeList';
import Controls from '../components/Controls';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [types, setTypes] = useState('');
  const [selectedTypes, setSelectedTypes] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, page, selectedTypes);
      setPokemon(data.results);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, page, selectedTypes]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span></span>}
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
            types={types}
            setTypes={setTypes}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
          <PokeList
            pokemon={pokemon}
            page={page}
            setPage={setPage}
            setTypes={setTypes}
            setLoading={setLoading}
          />
        </>
      )}
    </div>
  );
}
