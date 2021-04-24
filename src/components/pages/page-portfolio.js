import React from "react";
import Portfolio from "../portfolio";
import NavBar from "../nav-bar.js";

function pagePortfolio() {
  return (
    <React.StrictMode>
      <NavBar />
      <Portfolio />
    </React.StrictMode>
  );
}

export default pagePortfolio;
