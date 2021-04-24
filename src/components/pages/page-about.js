import React from "react";
import About from "../about";
import NavBar from "../nav-bar.js";

function pageAbout() {
  return (
    <React.StrictMode>
      <NavBar />
      <About />
    </React.StrictMode>
  );
}

export default pageAbout;
