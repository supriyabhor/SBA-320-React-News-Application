import React, { useState } from 'react';

const SearchForm = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search for news:</label>
      <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;