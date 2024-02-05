'use client'
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

 
  const handleSearch = () => {
    // Validate if the location is not empty before triggering the search
    if (city.trim() !== '') {
      onSearch(city);
      // Clear the search input field after triggering the search
      setCity('');
    }
  };

  const handleKeyPress = (event) => {
    // Check if the key pressed is Enter
    if (event.key === 'Enter') {
      // Call the search function when Enter key is pressed
      handleSearch();
    }
  };

  return (
    <div className="search-container">
     <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress} // Handle Enter key press
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
