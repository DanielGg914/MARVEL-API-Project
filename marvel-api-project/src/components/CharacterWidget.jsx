import React from "react";
import Loading from "../pages/Loading";
import { useAppContext } from "../util/context";

const CharacterWidget = () => {
  const { results, loading } = useAppContext();

  if (loading) {
    <div className="loading"><Loading /></div>;
  }

  return (
    <section className="main">
      {results.map((result) => {
        const { id, name, description, thumbnail, modified, comics} = result;
        return (
          <div className="card-main" key={id}>
            <div className="card">
              <div className="front">
                <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
              </div>
              <div className="back">
                <h4>{name}</h4>
                <p>{description}</p>
                <p> Lase modified: {modified}</p>
                <p>Comics Available: {comics.available}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CharacterWidget;
