import React from "react";

function Pizza(pizza) {
  const { photoName, name, ingredients, price, soldOut } = pizza?.pizza;
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={photoName} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      {soldOut ? (
        <p className="sold-out"> Sold Out</p>
      ) : (
        <p>
          Price: <span>${price}</span>
        </p>
      )}
    </div>
  );
}

export default Pizza;
