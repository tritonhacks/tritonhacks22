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
          window.location.href = "https://tripetto.app/run/43KGDDA3I2";
          return null;
        }}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
