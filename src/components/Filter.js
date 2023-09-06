import React from 'react';
import "./Filter.css"

function Filter({ handleFilterChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="filter by title"
        onChange={(e) => handleFilterChange('title', e.target.value)}
      />
      <input
        type="number"
        placeholder="filter by rating"
        onChange={(e) => handleFilterChange('rating', e.target.value)}
      />
    </div>
  );
}

export default Filter;
