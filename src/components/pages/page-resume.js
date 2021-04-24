import React from "react";
import Resume from "../resume";
import NavBar from "../nav-bar.js";

function pageResume() {
  return (
    <React.StrictMode>
      <NavBar />
      <Resume />
    </React.StrictMode>
  );
}

export default pageResume;
