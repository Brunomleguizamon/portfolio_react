import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import Home from "./components/home.js";
import pageAbout from "./components/pages/page-about.js";
import pageResume from "./components/pages/page-resume.js";
import pagePortfolio from "./components/pages/page-portfolio.js";
import pageContact from "./components/pages/page-contact.js";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={pageAbout} />
        <Route path="/resume" exact component={pageResume} />
        <Route path="/portfolio" exact component={pagePortfolio} />
        <Route path="/contact" exact component={pageContact} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
