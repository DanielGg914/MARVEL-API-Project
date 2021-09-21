import React from "react";
import { useAppContext } from "../util/context";

const CharacterWidget = () => {
  const { results } = useAppContext();

  return (
    <div className="main">
      {results.map((result) => {
        const { id, name, description, thumbnail, modified } = result;
        return (
          <div className="container" key={id}>
            <div className="widget">
              <img src={thumbnail} alt={name} />
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{modified}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterWidget;
