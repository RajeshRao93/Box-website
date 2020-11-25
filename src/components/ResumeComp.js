import React from "react";
import "./ResumeComp.css";
import { MDBIcon } from "mdbreact";
import FooterPage from "./footer.js";
import Jumbotron from "./Jumbotron.js";
import IntroComp from "./IntroductionComp";
import ExperienceComp from "./ExperienceComp";
import SkillsComp from "./SkillsComp";
import EducationComp from "./EducationComp";
import ProjectDetailsComp from "./ProjectDetailsComp";

class ResumeDiv extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      category1: false,
      category2: false,
      category3: false,
      category4: false,
      category5: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
    this.changebgcolor = this.changebgcolor.bind(this);
    this.setStateDefaultValues = this.setStateDefaultValues.bind(this);
  }

  setStateDefaultValues() {
    this.setState({ category1: false });
    this.setState({ category2: false });
    this.setState({ category3: false });
    this.setState({ category4: false });
    this.setState({ category5: false });
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "category1":
        this.setStateDefaultValues();
        this.setState({ category1: !this.state.category1 });
        break;
      case "category2":
        this.setStateDefaultValues();
        this.setState({ category2: !this.state.category2 });
        break;
      case "category3":
        this.setStateDefaultValues();
        this.setState({ category3: !this.state.category3 });
        break;
      case "category4":
        this.setStateDefaultValues();
        this.setState({ category4: !this.state.category4 });
        break;
      case "category5":
        this.setStateDefaultValues();
        this.setState({ category5: !this.state.category5 });
        break;
      default:
    }
  }

  changebgcolor(e) {
    if (e.target.style.width === "" || e.target.style.width === "20%") {
      e.target.style.width = "18%";
      //e.target.style.background = "#D5C543"; //"#0cd196"
    } else {
      e.target.style.width = "20%";
      //e.target.style.background = "#bbd543";
    }
  }

  render() {
    const {
      category1,
      category2,
      category3,
      category4,
      category5,
    } = this.state;
    return (
      <div className="homepage">
        <div className="first">
          <div
            className="categories"
            onClick={() => this.hideComponent("category1")}
            onMouseEnter={this.changebgcolor}
            onMouseLeave={this.changebgcolor}
          >
            <h5>
              <MDBIcon icon="angle-double-right" />
              <b>Introduction</b>
            </h5>
          </div>
          <div
            className="categories"
            onClick={() => this.hideComponent("category2")}
            onMouseEnter={this.changebgcolor}
            onMouseLeave={this.changebgcolor}
          >
            <h5>
              <MDBIcon icon="angle-double-right" />
              <b>Experience</b>
            </h5>
          </div>
          <div
            className="categories"
            onClick={() => this.hideComponent("category3")}
            onMouseEnter={this.changebgcolor}
            onMouseLeave={this.changebgcolor}
          >
            <h5>
              <MDBIcon icon="angle-double-right" />
              <b>Skills</b>
            </h5>
          </div>
          <div
            className="categories"
            onClick={() => this.hideComponent("category4")}
            onMouseEnter={this.changebgcolor}
            onMouseLeave={this.changebgcolor}
          >
            <h5>
              <MDBIcon icon="angle-double-right" />
              <b>Education</b>
            </h5>
          </div>
          <div
            className="categories"
            onClick={() => this.hideComponent("category5")}
            onMouseEnter={this.changebgcolor}
            onMouseLeave={this.changebgcolor}
          >
            <h5>
              <MDBIcon icon="angle-double-right" />
              <b>Projects</b>
            </h5>
          </div>
        </div>
        <div className="second">
          {!category1 &&
            !category2 &&
            !category3 &&
            !category4 &&
            !category5 && <Jumbotron />}
          {category1 && <IntroComp />}
          {category2 && <ExperienceComp />}
          {category3 && <SkillsComp />}
          {category4 && <EducationComp />}
          {category5 && <ProjectDetailsComp />}
        </div>
        <div>
          <FooterPage />
        </div>
      </div>
    );
  }
}

export default ResumeDiv;
