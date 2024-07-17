import React from 'react';
import "./App.css"

const Search = ({ setTitle, setSortBy }) => {
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className='search'>
      <input className='search2' type="text" placeholder="Search by title" onChange={handleTitleChange} />
      <select onChange={handleSortByChange}>
        <option value="year">Year</option>
        <option value="imdb.rating">Rating</option>
      </select>
    </div>
  );
};

export default Search;
