import React from "react";
import CharacterWidget from "../components/CharacterWidget";
import SearchBar from "../components/SearchBar";

const CharacterList = () => {
  return (
    <div>
      <SearchBar />
      <CharacterWidget />
    </div>
  );
};

export default CharacterList;
