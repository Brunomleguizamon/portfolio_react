import React from "react";
import { BiEnvelopeOpen, BiShareAlt, BiPhoneCall } from "react-icons/bi";
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <BiEnvelopeOpen color="#c70039" fontSize="2rem" className="bi" />
              <h4>Email Me</h4>
              <p>Brunomleguizamon@gmail.com</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <BiPhoneCall color="#c70039" fontSize="2rem" className="bi" />

              <h3>Call Me</h3>
              <p>+54 9 11 6166 12 71</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <BiShareAlt color="#c70039" fontSize="2rem" className="bi" />
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a
                  href="https://github.com/Brunomleguizamon"
                  className="github"
                >
                  <AiOutlineGithub color="#c70039" className="bx" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bruno-leguizamon-bba59b164"
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
          </div>
        </div>
        <form
          action="https://formsubmit.co/brunomleguizamon@gmail.com"
          method="POST"
          className="email-form mt-4"
        >
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={10}
              placeholder="Message"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Message from portfolio personal"
          />
          <input
            type="hidden"
            name="_next"
            value="https://www.brunomleguizamon.com.ar/#/contact"
          ></input>
        </form>
      </div>
    </section>
  );
}

export default Contact;
