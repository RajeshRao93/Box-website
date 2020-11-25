import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import "./footer.css";

const FooterPage = () => {
  return (
    <div className="footerclass">
      <MDBFooter className=" font-small pt-4 mt-4">
        <MDBContainer
          fluid
          className="text-center text-md-left"
          style={{ backgroundcolor: "black" }}
        >
          <MDBRow>
            <MDBCol md="6">
              <br />
              <p style={{ color: "black", fontWeight: "400" }}>
                <MDBIcon fab icon="phoenix-framework" /> <b>allaboutme</b>
                <br />
                <p>
                  <b>
                    <MDBIcon fab icon="connectdevelop" /> Developed by Rajesha
                    K.R.
                  </b>
                  <br />
                  <b>
                    <MDBIcon far icon="envelope-open" /> Email id:
                    rajesh.rao0593@gmail.com
                  </b>{" "}
                  <b>
                    {" "}
                    | <MDBIcon icon="mobile-alt" /> Phone: +49 15124384552
                  </b>
                </p>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="footer-copyright text-center py-3"
          style={{ color: "black" }}
        >
          <MDBContainer fluid>
            <p>
              {" "}
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="...."> rajesh.rao0593@gmail.com </a>
            </p>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default FooterPage;
