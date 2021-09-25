import React from "react";
import Loading from "../pages/Loading";
import { useAppContext } from "../util/context";

const ComicsWidget = () => {
  const { items, loading } = useAppContext();

  if (loading) {
    <div className="loading">
      <Loading />
    </div>;
  }

  return (
    <section className="main">
      {items.map((item) => {
        const { resourceURI, name } = item;
        return (
          <div className="card-main">
            <div className="card">
              <h3>{resourceURI}</h3>
              <p>{name}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ComicsWidget;
