import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './ProjectCardComp.css';
import { MDBIcon } from 'mdbreact';
import { Markup } from 'interweave';


class Project extends React.Component {
    render() {
        return (

            <div className="main">
                <div className="project">
                    <Card style={{ width: '65rem', height: '30rem', backgroundColor: '#00000000', border: 'solid white', borderWidth: '10px' }}>
                        <Card.Body>
                            <Card.Title><MDBIcon icon="sign" /><b> PROJECT DETAILS</b></Card.Title>
                            <Card.Text style={{ color: 'white' }}>
                                <b><p> Project title: {this.props.title}</p><br />
                                    <p>Done at: {this.props.place}</p><br />
                                    <p>Timeline: {this.props.time}</p><br />
                                    <p>Details: {this.props.details}</p><br />
                                    <p>Programming technologies: {this.props.technologies}</p><br />
                                    <p>Github link: <a style={{ color: '#e7c313' }} href={this.props.gitlink}>{this.props.gitlink}</a></p>
                                </b>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Project;
