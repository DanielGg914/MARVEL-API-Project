import React from "react";
import { useAppContext } from "../util/context";

const CharacterWidget = () => {
  const { results, loading } = useAppContext();
  console.log(results);

  if (loading) {
    <div className="loading"></div>;
  }

  return (
    <section className="main">
      {results.map((result) => {
        const { id, name, description, thumbnail, modified } = result;
        return (
          <div className="card-main" key={id}>
            <div className="card">
              <div className="front">
                <img src={thumbnail} alt={name} />
              </div>
              <div className="back">
                <h4>{name}</h4>
                <p>{description}</p>
                <p>{modified}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CharacterWidget;
