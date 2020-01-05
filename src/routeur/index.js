import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../component/home";
import Description from "../component/description";

export default class index extends Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/desc">ce ci est ma description</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route component={Description} path="/desc" />
            <Route component={Home} path="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}