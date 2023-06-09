import React from "react";

function Footer() {
  const date = new Date().toLocaleTimeString();
  const hours = new Date().getHours();
  const isOpen = hours >= 8 && hours <= 22;
  return (
    <footer className="footer">
      {date}. {isOpen ? "We're currently open!" : "We're closed"}{" "}
    </footer>
  );
}

export default Footer;
