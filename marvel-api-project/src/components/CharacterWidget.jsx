import React from "react";
import { useAppContext } from "../util/context";

const CharacterWidget = () => {
  const { results, loading } = useAppContext();
  console.log(results);

  if(loading){
    <div className="loading"></div>
  }

  return (
    <section className="main">
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
    </section>
  );
};

export default CharacterWidget;
