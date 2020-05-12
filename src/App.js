import React, { Component } from 'react';
import './App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Badge } from 'react-bootstrap';
import Navigationbar from './components/navbar';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Router from './router.js'

class App extends Component {

  render() {

    return (
      <div>
        <div>
          <Navigationbar />
          <Router />
        </div>
      </div>
    );
  }
}

export default App;
