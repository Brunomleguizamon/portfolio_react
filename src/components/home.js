import React from "react";
import { BsList } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function navMenu() {
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

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

  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
    console.log("ouch from home");
  });
}

function Home() {
  return (
    <header id="header">
      <div className="container">
        <h1>
          <a href="/">Bruno Leguizamon</a>
        </h1>
        <h2>
          I'm a <span>Web Developer</span>
        </h2>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link active" href="/">
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
            className="bi bi-list mobile-nav-toggle"
            color="#c70039"
          />
        </nav>
        <div className="social-links">
          <a href="https://github.com/Brunomleguizamon" className="github">
            <AiOutlineGithub color="#c70039" className="bx" />
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-leguizamon"
            className="linkedin"
          >
            <AiFillLinkedin color="#c70039" className="bx" />
          </a>
          <a
            href="https://www.instagram.com/bmleguizamon/"
            className="instagram"
          >
            <AiFillInstagram color="#c70039" className="bx" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Home;
