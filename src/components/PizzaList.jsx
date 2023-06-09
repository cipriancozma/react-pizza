import React from "react";
import { pizzaData } from "../data/data.js";
import Pizza from "./Pizza";

function PizzaList() {
  return (
    <div>
      {pizzaData.map((pizza, idx) => {
        return <Pizza key={idx} pizza={pizza} />;
      })}
    </div>
  );
}

export default PizzaList;
