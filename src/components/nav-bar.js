import React from "react";
import { BsList } from "react-icons/bs";

function navBar() {
  return (
    <header id="header" class="header-top">
      <div className="container">
        <h1>
          <a href="/">Bruno Leguizamon</a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="/#/about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="/#/resume">
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link" href="/#/portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" href="/#/contact">
                Contact
              </a>
            </li>
          </ul>
          <BsList className="mobile-nav-toggle bi bi-list" color="#c70039" />
        </nav>
      </div>
    </header>
  );
}

export default navBar;
