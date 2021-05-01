import React from "react";
import { BsList } from "react-icons/bs";

function navMenu() {
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
    console.log("ouch from nav-bar");
  });
}

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
          <BsList
            onClick={navMenu}
            className="mobile-nav-toggle bi bi-list"
            color="#c70039"
          />
        </nav>
      </div>
    </header>
  );
}

export default navBar;
