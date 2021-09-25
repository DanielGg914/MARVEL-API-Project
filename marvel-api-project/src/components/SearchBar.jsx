import React from "react";
import { useAppContext } from "../util/context";
import { links } from "../util/const";
import { Link } from "react-router-dom";

const filterList = ["error"];

const SearchBar = () => {
  const { query, handleSearch, loading } = useAppContext();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <div className="search">
        <h2>Search Marvel</h2>
        <input type="text" className="form-input" value={query} onChange={(e) => handleSearch(e.target.value)} />
      </div>

      <ul className="link">
        {links
          .filter((link) => !filterList.includes(link.text))
          .map((link) => {
            const { id, url, text } = link;
            
              <li key={id}>
                <Link to={url}>
                  {text}
                </Link>
              </li>
            
          })}
      </ul>
    </form>
  );
};

export default SearchBar;
