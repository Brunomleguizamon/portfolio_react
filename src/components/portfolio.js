import React from "react";
import Card from "react-bootstrap/Card";

import imagenDCIM from "../images/dcim.png";
import imagenFlaskAPP from "../images/flask-mail.png";
import imagenPortfolio from "../images/portfolio.png";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>
        <div className="row portfolio-container">
          <div className="col-md-4">
            <Card style={{ width: "22rem", backgroundColor: "black" }}>
              <Card.Img variant="top" src={imagenDCIM} />
              <Card.Body>
                <Card.Title>DCIM Soluciones Tecnologicas</Card.Title>
                <Card.Text>
                  Information:
                  <br />
                  Project created from Wordpress. Maintained and modified by me
                  to date
                </Card.Text>
                <Card.Text>
                  URL Proyecto:
                  <br />
                  <Card.Link href="http://www.dcim.com.ar" target="_blank">
                    www.dcim.com.ar
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "22rem", backgroundColor: "black" }}>
              <Card.Img variant="top" src={imagenPortfolio} />
              <Card.Body>
                <Card.Title>Portfolio personal</Card.Title>
                <Card.Text>
                  Information:
                  <br />
                  App created with react and bootstrap
                </Card.Text>
                <Card.Text>
                  URL Proyecto:
                  <br />
                  <Card.Link
                    href="https://www.brunomleguizamon.com.ar"
                    target="_blank"
                  >
                    www.brunomleguizamon.com.ar
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "22rem", backgroundColor: "black" }}>
              <Card.Img variant="top" src={imagenFlaskAPP} />
              <Card.Body>
                <Card.Title>APP Flask Mail</Card.Title>
                <Card.Text>
                  Information:
                  <br />
                  Project created with flask, to be used as a contact form
                </Card.Text>
                <Card.Text>
                  URL Proyecto:
                  <br />
                  <Card.Link
                    href="https://app-flask-mail.herokuapp.com/"
                    target="_blank"
                  >
                    app-flask-mail.herokuapp.com/
                  </Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
