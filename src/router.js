import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ResumeDiv from "./components/ResumeComp";
import Homepage from "./components/Homepage";

class Router extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/Home/" />
            <Route exact path="/Home/" component={Homepage} />
            <Route exact path="/resumepage/" component={ResumeDiv} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
