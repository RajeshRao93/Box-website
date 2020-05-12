"use strict"
import React from 'react';
import { Nav, NavItem, Navbar, Badge, Form, Button, FormControl } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import './navbar.css';

class Navigationbar extends React.Component {
    render() {
        return (
            <Navbar style={{ backgroundImage: 'linear-gradient(45deg, white, #289FA5)', color: '#289fa5' }}>
                <Navbar.Brand href="/Home/" style={{ color: '#289fa5', borderBottom: '5px #289fa5' }} >
                    <h2 style={{ fontWeight: '900', fontSize: '2.5rem' }}><MDBIcon fab icon="phoenix-framework" />   BOX</h2>
                </Navbar.Brand>
                <div className='About'>
                    <b style={{ fontWeight: '900', color: 'white' }}>ABOUT</b>
                </div>
            </Navbar >
        );
    }
}

export default Navigationbar;