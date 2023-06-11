import React from "react";

function Footer() {
  const date = new Date().toLocaleTimeString();
  const hours = new Date().getHours();
  const isOpen = hours >= 8 && hours <= 22;
  return (
    <footer className="footer">
      {date}.{" "}
      {isOpen ? (
        <div>
          <p>We're currently open!</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>We're closed!</p>
      )}{" "}
    </footer>
  );
}

export default Footer;
