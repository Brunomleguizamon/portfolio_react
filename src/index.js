import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={pageAbout} />
        <Route exact path="/resume" component={pageResume} />
        <Route exact path="/portfolio" component={pagePortfolio} />
        <Route exact path="/contact" component={pageContact} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
