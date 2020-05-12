import React from "react";
import Smvit from '../Images/SmvitLogo.jpg';
import Hsrw from '../Images/hsrwLogo.png';
import Organization from './OrganizationComp.js';

class EducationComp extends React.Component {

    constructor() {
        super();
        this.state = {
            mastersCourses: "> Mobile and Internet computing | Data Analysis | Research project | Data Mining | Software Engineering <br/><br/>",
            bachelorsCourses: "> C programming | Web programming | C# .NET | Database Management System <br/><br/>"
        };
    }

    render() {
        return (

            <div>
                <div className="expFirst">
                    <Organization name="Rhienwaal University of Applied Science" address="Kamp lintfort, NRW, Germany" image={Hsrw} duration="March 2019 - Present" designation="Masters in Information Engineering and Computer Science" responsibility={this.state.mastersCourses} text="Courses:" />
                    <Organization name="Sir. M Visvesvaraya Institute of Technology" address="Bengaluru, Karanataka, India" image={Smvit} duration="September 2010 — June 2014" designation="Bachelor in Information Science & Engineering" responsibility={this.state.bachelorsCourses} text="Courses:" />
                </div>
            </div >
        );
    }
}

export default EducationComp;