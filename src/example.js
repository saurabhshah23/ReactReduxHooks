/**
 * Author: Saurabh Shah
 * Date Created: 30/03/2020
 * PURPOSE: Demo app for ThoughtWorks. Simulating Airline search.
 * Router added - not required for this app.
 * Redux added:
 *  - to share flights data from search module to flights module
 *  - share search data from search to flights module
 * redux-thunk added for async API calls.
 * React-Bootstrap added for simplicity of designing
 * SASS added for ease of styling.
 * "holderjs" added for image placeholders instead of actual images.
 *
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/layout/Home";

import { Provider } from "react-redux";
import store from "./store/store";

export default function BasicExample() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
