import React from "react";

function Pizza(pizza) {
  const { photoName, name, ingredients, price } = pizza?.pizza;
  return (
    <div>
      <img src={photoName} alt={photoName} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>
        Price: <span>${price}</span>
      </p>
    </div>
  );
}

export default Pizza;
