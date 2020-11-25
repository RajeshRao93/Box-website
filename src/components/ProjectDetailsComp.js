import React from "react";
import "./ProjectDetailsComp.css";
import Project from "./ProjectCardComp.js";

class ProjectDetailsComp extends React.Component {
  constructor() {
    super();
    this.state = {
      bonapp:
        "An Application for restaurant booking in a specific area. BonApp application can be used by the owners and customers as well. A Micro-Service architectured system, hosted on Docker.",
      bonappTech:
        "Nodejs, SQL, Reactjs, PostgreSQL, Docker, Nginx API Gateway, AWS S3 bucket",
      bonappLink: "https://github.com/RajeshRao93/BonApp--Restaurant-app.git",
      katchapp:
        "KatchUp is an event notification application built based on Client-Server architecture. Users make use of a mobile application to get notified about the events happening around or host an event by themselves and to post it on the KatchUp platform to let the users know about the event.",
      katchappTech: "NodeJs, ReactJs, SQL, PostgreSQL, Node Express",
      katchappLink: "https://github.com/RajeshRao93/Katchup.git",
      ctDualenergy:
        "Application for CT scanner which allows the radiologists to configure the settings for taking the scan. They can also run several algorithms on the scans of the patients and view the results on the screen.",
      ctDualenergyTech:
        "C# .Net, Dicom, ASP.Net, Web API, Ado.Net, MS SQL Server,Javascript, NUnit, Visual Studio 2017, TFS.",
      vulcan:
        "A client-server application, which provided an interface for the Microsoft agents to review various user-generated Xbox contents on which complaints have been raised by other Xbox users.",
      vulcanTech:
        "C#.Net, Web API, ado.net, MS SQL Server, JavaScript, HTML, Azure storage.",
      BoxWebsite:
        "A template website for CV/Resume. Currently a static website with my resume.",
      BoxWebsiteTech: "ReactJS, Javascript, HTML5, CSS",
      BoxWebsiteLink: "https://github.com/RajeshRao93/Box-Website",
      ExpensesDiary:
        "An android & iOS mobile application to track the daily expenses and visualize the expenses.",
      ExpensesDiaryTech: "React Native, Javascript, CSS, SQLite",
      ExpensesDiaryLink: "https://github.com/RajeshRao93/ExpensesDiary",
    };
  }

  render() {
    return (
      <div>
        <div className="projectFirst">
          <Project
            title="Box Website"
            place="Self"
            time="May 2020 - June 2020 "
            details={this.state.BoxWebsite}
            technologies={this.state.BoxWebsiteTech}
            gitlink={this.state.BoxWebsiteLink}
          />
          <Project
            title="ExpensesDiary Mobile Application"
            place="Self"
            time="June 2020"
            details={this.state.ExpensesDiary}
            technologies={this.state.ExpensesDiaryTech}
            gitlink={this.state.ExpensesDiaryLink}
          />
          <Project
            title="BonApp – A Customized Restaurant Application"
            place="Hochschule Rhienwaal"
            time="April 2019 — June 2019"
            details={this.state.bonapp}
            technologies={this.state.bonappTech}
            gitlink={this.state.bonappLink}
          />
          <Project
            title="KatchUp - An event hosting/booking application"
            place="Hochschule Rhienwaal"
            time="April 2019 — June 2019"
            details={this.state.katchapp}
            technologies={this.state.katchappTech}
            gitlink={this.state.katchappLink}
          />
          <Project
            title="CT Dual Energy"
            place="Siemens Healthineers, Bangalore"
            time="May 2017 — March 2019"
            details={this.state.ctDualenergy}
            technologies={this.state.ctDualenergyTech}
            gitlink="Property of Siemens"
          />
          <Project
            title="Vulcan"
            place="Aricent Technologies, Bangalore"
            time="September 2015 — April 2017"
            details={this.state.vulcan}
            technologies={this.state.vulcanTech}
            gitlink="Property of Aricent"
          />
        </div>
      </div>
    );
  }
}

export default ProjectDetailsComp;
