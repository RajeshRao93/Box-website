import React from "react";
import { Navbar } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import "./navbar.css";

class Navigationbar extends React.Component {
  render() {
    return (
      <Navbar
        style={{
          //backgroundImage: "linear-gradient(45deg, white, #289FA5)",
          color: "#289fa5",
          backgroundColor: "#E2E2D8",
        }}
      >
        <Navbar.Brand
          href="/Home/"
          style={{ color: "black", borderBottom: "5px #289fa5" }} //#289fa5
        >
          <h2 style={{ fontWeight: "900", fontSize: "2.5rem" }}>
            <MDBIcon fab icon="phoenix-framework" /> allaboutme
          </h2>
        </Navbar.Brand>
        <div className="About">
          {/* <b style={{ fontWeight: '900', color: 'white' }}>ABOUT</b> */}
        </div>
      </Navbar>
    );
  }
}

export default Navigationbar;
