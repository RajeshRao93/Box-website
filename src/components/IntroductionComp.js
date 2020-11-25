import React from "react";
import { Image, Card } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import image from "../Images/RajeshImg.png";
import "./IntroductionComp.css";

class IntroductionComp extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "Rajesha Koppa Ramesha",
    };
  }

  render() {
    return (
      <div>
        <div className="introFirst">
          <Image
            style={{ paddingLeft: "20%", paddingTop: "5%", width: "65%" }}
            src={image}
            rounded
          />
          <br />
          <h4 style={{ color: "white", paddingLeft: "9%", paddingTop: "1%" }}>
            {" "}
            <b>{this.state.Name} </b>{" "}
          </h4>
        </div>
        <div className="introSecond">
          <div className="addressCard">
            <Card
              style={{
                width: "20rem",
                height: "8rem",
                backgroundColor: "#00000000",
                border: "solid white",
                borderWidth: "10px",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon icon="map-marker-alt" /> <b>ADDRESS</b>{" "}
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  <b>
                    {" "}
                    SchubertStr. 1, <br /> Erlangen 91052, Germany
                  </b>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <br />
            <Card
              style={{
                width: "44rem",
                height: "14rem",
                backgroundColor: "#00000000",
                border: "solid white",
                borderWidth: "10px",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon icon="sign" />
                  <b> DETAILS</b>
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  <b>
                    <p>
                      {" "}
                      Date / Place of birth: 02-05-1993, THIRTHAHALLI, INDIA
                    </p>
                    <p> Nationality: INDIAN</p>
                    <MDBIcon fab icon="linkedin" /> LinkedIn:{" "}
                    <a
                      style={{ color: "#e7c313" }}
                      href="https://www.linkedin.com/in/rajesha-koppa-ramesha-0bbb45124/"
                    >
                      Rajesha Koppa Ramesha
                    </a>
                    <br />
                    <MDBIcon fab icon="facebook" /> Facebook:{" "}
                    <a
                      style={{ color: "#e7c313" }}
                      href="https://www.facebook.com/rajesh.rao.96"
                    >
                      Rajesh Rao
                    </a>
                    <br />
                    <MDBIcon fab icon="github" /> Github:{" "}
                    <a
                      style={{ color: "#e7c313" }}
                      href="https://github.com/RajeshRao93"
                    >
                      Rajesha Koppa Ramesha
                    </a>
                  </b>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <br />
            <Card
              style={{
                width: "44rem",
                height: "14rem",
                backgroundColor: "#00000000",
                border: "solid white",
                borderWidth: "10px",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <MDBIcon icon="star-of-david" /> <b>SUMMARY</b>
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  <b>
                    <p style={{ textAlign: "justify" }}>
                      Motivated and passionate software professional with 4
                      years of experience. Currently, <br />
                      a master’s student pursuing MSc in Information Engineering
                      and Computer Science <br />
                      at Rhein Waal University of Applied Science, Kamp
                      Lintfort. Looking for job opportunities <br />
                      to gain more knowledge and experience in my field of
                      interest.
                    </p>
                  </b>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="introThird">
          <div className="contactCard">
            <Card
              style={{
                width: "20rem",
                height: "8rem",
                backgroundColor: "#00000000",
                border: "solid white",
                borderWidth: "10px",
              }}
            >
              <Card.Body>
                <Card.Title>
                  {" "}
                  <MDBIcon icon="globe" /> <b>CONTACT DETAILS</b>
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  <b>
                    {" "}
                    Email: rajesh.rao0593@gmail.com <br /> Phone no: +49
                    15124384552{" "}
                  </b>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroductionComp;
