import React from "react";
import { BsList } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function Home() {
  return (
    <header id="header">
      <div className="container">
        <h1>
          <a href="/">Bruno Leguizamon</a>
        </h1>
        <h2>
          I'm a <span>Web Developer</span> from Buenos Aires
        </h2>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="/resume">
                Resume
              </a>
            </li>
            <li>
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <BsList className="bi bi-list mobile-nav-toggle" color="#c70039" />
        </nav>
        <div className="social-links">
          <a
            href="https://github.com/Brunomleguizamon"
            className="github"
            target="_blank"
          >
            <AiOutlineGithub color="#c70039" className="bx" />
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-leguizamon-bba59b164"
            className="linkedin"
            target="_blank"
          >
            <AiFillLinkedin color="#c70039" className="bx" />
          </a>
          <a
            href="https://www.instagram.com/bmleguizamon/"
            className="instagram"
            target="_blank"
          >
            <AiFillInstagram color="#c70039" className="bx" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Home;
