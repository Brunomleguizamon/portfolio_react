import React from "react";
import { BsChevronRight } from "react-icons/bs";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiPython,
  DiJavascript1,
  DiStreamline,
  DiCode,
  DiBootstrap,
} from "react-icons/di";
import imageMe from "../images/me.jpg";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={imageMe} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web Developer</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <BsChevronRight color="#c70039" />
                    <strong>Website:</strong>
                    <a href="https://www.brunomleguizamon.com.ar">
                      <span>www.brunomleguizamon.com</span>
                    </a>
                  </li>
                  <li>
                    <BsChevronRight color="#c70039" />
                    <strong>Phone:</strong> <span>+45 5025 9102</span>
                  </li>
                  <li>
                    <BsChevronRight color="#c70039" /> <strong>From:</strong>
                    <span>Buenos Aires, Argentina</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <BsChevronRight color="#c70039" /> <strong>Age:</strong>
                    <span>23</span>
                  </li>
                  <li>
                    <BsChevronRight color="#c70039" /> <strong>Email:</strong>{" "}
                    <span>brunomleguizamon@gmail.com</span>
                  </li>
                  <li>
                    <BsChevronRight color="#c70039" /> <strong>Living:</strong>
                    <span>Copenhagen, Denmark</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Hello World! My name is Bruno, I am 23 years old and I graduated
              from technical school. In my first work experiences I was trained
              in programming of telephone and fire exchanges as well as BMS. As
              I progressed in my career, I realized that my true passion was
              programming, which is why I did several online courses in a
              self-taught way and I did a Master in Python at the University of
              San Martin. I seek to put into practice all the skills acquired,
              as well as learn and improve myself. I like teamwork, challenging
              jobs, and conflict resolution and process optimization.
            </p>
          </div>
        </div>
      </div>

      <div className="interests container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <DiHtml5 color="#ED5E26" fontSize="2rem" />
              <h3>HTML5</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <DiCss3 color="#2891CA" fontSize="2rem" />
              <h3>CSS3</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <DiPython color="#517FA6" fontSize="2rem" />
              <h3>Python</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <DiJavascript1 color="#EFD81D" fontSize="2rem" />
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <DiStreamline color="#175E87" fontSize="2rem" />
              <h3>MySQL</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <DiCode color="#2891CA" fontSize="2rem" />
              <h3>XML</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <DiReact fontSize="2rem" color="#5ED3F3" />
              <h3> React</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <DiBootstrap color="#533A78" fontSize="2rem" />
              <h3>BootStrap</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
