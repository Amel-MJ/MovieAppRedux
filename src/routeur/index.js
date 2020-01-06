import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../component/home";
import Description from "../component/description";

export default class index extends Component {
  render() {
    return (
      <div>
        <Router>

          <Switch>
            <Route  path="/Desc/:id" component={Description} />
            <Route  path="/" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}