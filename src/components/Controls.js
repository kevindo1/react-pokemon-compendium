import React from 'react';

export default function Controls({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  types,
  selectedTypes,
  setSelectedTypes,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Name"
        label="Outlined"
        variant="outlined"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select value={selectedTypes} onChange={(e) => setSelectedTypes(e.target.value)}>
        <option value="All">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
