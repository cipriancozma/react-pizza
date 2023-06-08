import React from "react";

function Footer() {
  const date = new Date().toLocaleTimeString();

  return <footer>{date}. We're currently open!</footer>;
}

export default Footer;
