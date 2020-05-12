import React, { Component } from 'react';
import { Nav, NavItem, Navbar, Badge, Button, Image } from 'react-bootstrap';
import './OrganizationComp.css';
import { MDBIcon } from 'mdbreact';
import { Markup } from 'interweave';


class Organization extends React.Component {
    render() {
        return (

            <div className="company">
                <div className="compfirstdiv">
                    <Image style={{ paddingLeft: '35%', paddingTop: '15%', width: '100%', paddingRight: '35%' }} src={this.props.image} rounded />
                    <div className='compDetails' >
                        <br />
                        <MDBIcon far icon="building" /> {this.props.name} <br />
                        <MDBIcon icon="map-marked-alt" /> {this.props.address}<br />
                        <br />
                    </div>
                </div>

                <div className="compseconddiv">
                    <br />
                    <MDBIcon far icon="clock" /> Duration: {this.props.duration}<br /><br />
                    <MDBIcon icon="user" /> Designation: {this.props.designation}<br /><br />
                    <MDBIcon fab icon="squarespace" /> {this.props.text} <br /><br />
                    <Markup content={this.props.responsibility} />
                </div>
                <br />
            </div>
        )
    }
}

export default Organization;
