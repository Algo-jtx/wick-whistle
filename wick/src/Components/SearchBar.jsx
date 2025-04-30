import React from 'react';

function SearchBar ({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for delicious meals"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className = "search-input"
      />
      </div>

  );
}
export default SearchBar;