import React from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

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
      <TextField
        id="filled-basic"
        type="text"
        placeholder="Search Name"
        label="Search Name"
        variant="filled"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <FormControl fullwidth>
        <InputLabel>Sort Order</InputLabel>
        <Select label="Sort Order" value={order} onChange={(e) => setOrder(e.target.value)}>
          <MenuItem value={'asc'}>Ascending</MenuItem>
          <MenuItem value={'desc'}>Descending</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullwidth>
        <Select value={selectedTypes} onChange={(e) => setSelectedTypes(e.target.value)}>
          <MenuItem value="All">All</MenuItem>
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={() => setLoading(true)}>
        Search
      </Button>
    </div>
  );
}
