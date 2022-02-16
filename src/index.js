import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route
        exact
        path="/apply"
        component={() => {
          window.location.href = 'https://tally.so/r/wg1odm';
          return null;
        }}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
