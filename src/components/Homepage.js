"use strict";
import React from "react";
import "./Homepage.css";
import {
  Nav,
  NavItem,
  Navbar,
  Badge,
  Jumbotron,
  Button,
  Card,
} from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import FooterPage from "./footer.js";
import image from "../Images/Cvlogo.jpg";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.moveNext = this.moveNext.bind(this);
  }

  moveNext() {
    this.props.history.push("/resumepage/");
  }

  changewidth(e) {
    if (e.target.style.width === "" || e.target.style.width === "18rem") {
      e.target.style.width = "20rem";
      e.target.style.border = "5px solid #082c4f";
    } else {
      e.target.style.width = "18rem";
      e.target.style.border = "1px solid white";
    }
  }

  render() {
    return (
      <div className="homepage">
        <div className="firstdiv">
          <Jumbotron
            style={{
              color: "#343a40ba",
              backgroundColor: "#e2e2d7",
              opacity: 0.3,
            }}
          >
            <h1
              style={{
                fontWeight: "900",
                fontFamily: "cursive",
                color: "black",
              }}
            >
              <MDBIcon far icon="hand-spock" /> Hello!
              <br />
              Welcome to <MDBIcon fab icon="phoenix-framework" /> BOX!
              <br />
              <br />
            </h1>
          </Jumbotron>
        </div>
        <div className="seconddiv">
          <div className="card1">
            <Card onClick={this.moveNext} style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                onMouseEnter={this.changewidth}
                onMouseLeave={this.changewidth}
                src={image}
              />
            </Card>
          </div>
        </div>
        <div>
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default Homepage;

{
  /* <Card.Body>
                                {/* <Card.Title>View Resume</Card.Title> */
}
// <Card.Text>
//<b> Click here to view the resume.</b>
// </Card.Text>
{
  /* <Button  variant="primary">See Resume</Button> */
}
// </Card.Body> */}
