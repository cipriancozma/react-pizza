import React from "react";
import { pizzaData } from "../data/data.js";
import Pizza from "./Pizza";

function PizzaList() {
  return (
    <>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All
        organic, all delicious.
      </p>
      <div className="pizzas">
        {pizzaData.length > 0 ? (
          <>
            {pizzaData.map((pizza, idx) => {
              return <Pizza key={idx} pizza={pizza} />;
            })}
          </>
        ) : (
          <p>Sorry! We're working on our menu. Please come back later!</p>
        )}
      </div>
    </>
  );
}

export default PizzaList;
