import React from "react";
import { useAppContext } from "../util/context";

const SearchBar = () => {
  const { query, handleSearch, loading } = useAppContext();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <div className="search">
      <h2>Search Marvel</h2>
      <img src="../images/marvel.png" alt="marvel logo" />
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      </div>
    </form>
  );
};

export default SearchBar;
