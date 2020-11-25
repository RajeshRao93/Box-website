import React from "react";
import { Jumbotron } from "react-bootstrap";
import { MDBIcon } from "mdbreact";

const JumbotronComp = () => {
  return (
    <div className="jumbo" style={{}}>
      <Jumbotron
        style={{ color: "#343a40ba", opacity: 0.3, backgroundColor: "#e2e2d7" }}
      >
        <h1
          style={{
            //backgroundImage: 'linear-gradient(45deg, white , #289FA5)',
            fontWeight: "900",
            fontFamily: "cursive",
            color: "black",
          }}
        >
          <MDBIcon far icon="hand-spock" /> <b>Hello!</b>
        </h1>
        <h4
          style={{ fontWeight: "900", fontFamily: "cursive", color: "black" }}
        >
          Welcome to <MDBIcon fab icon="phoenix-framework" /> allaboutme.
          <br />
          <br />
          Template website for CV / Resume.
        </h4>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComp;
