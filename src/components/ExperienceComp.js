import React from "react";
import Siemens from "../Images/SiemensLogo.jpg";
import Aricent from "../Images/AricentLogo.jpg";
import Organization from "./OrganizationComp.js";

class ExperienceComp extends React.Component {
  constructor() {
    super();
    this.state = {
      siemensStudentResp:
        "> Worked on Information Security topics. <br/> > Developed Azure chat bot for answering info security questionnaires. <br/> > Worked on software development with C# .Net, ASP .Net core, Web API, Azure dev ops CI/CD pipelines.",
      siemensResp:
        "> Worked on a client-server user interaction application for Healthcare devices. <br/> > Worked on software development using C# .Net, Dicom data, ASP.Net, Web API, ado.net, Microsoft SQL Server, JavaScript. <br/> > Implemented automation of tests, Unit tests using NUnit.",
      aricentResp:
        "> Worked on a 3-tier client-server web-based application. <br/> > Extensively worked on the server-side development. <br/> > Involved in code development using technologies like C# .Net, ASP.Net, Web API, WCF Rest, <br/> ado.net, Microsoft SQL Server, JavaScript, HTML5.",
    };
  }

  render() {
    return (
      <div>
        <div className="expFirst">
          <Organization
            name="Siemens Healthineers"
            address="Erlangen, Germany"
            image={Siemens}
            duration="October 2019 — Present"
            designation="Working student"
            responsibility={this.state.siemensStudentResp}
            text="Responsibilities:"
          />
          <Organization
            name="Siemens Healthineers"
            address="Bengaluru, India"
            image={Siemens}
            duration="May 2017 — March 2019"
            designation="Engineer Design and Development"
            responsibility={this.state.siemensResp}
            text="Responsibilities:"
          />
          <Organization
            name="Aricent Technologies"
            address="Bengaluru, India"
            image={Aricent}
            duration="September 2014 — April 2017"
            designation="Senior Software Engineer"
            responsibility={this.state.aricentResp}
            text="Responsibilities:"
          />
        </div>
      </div>
    );
  }
}

export default ExperienceComp;
