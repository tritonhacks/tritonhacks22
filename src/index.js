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
      <Route
        exact
        path="/volunteer"
        component={() => {
          window.location.href = 'https://tally.so/r/mBVg4m';
          return null;
        }}
      />
      <Route
        exact
        path="/code-of-conduct"
        component={() => {
          window.location.href = 'https://docs.google.com/document/d/15XFLu9cKmQYgjIovn3-t5Ow37imWAC_IvOzRQALUDl0/edit?usp=sharing';
          return null;
        }}
      />
      <Route
        exact
        path="/discord"
        component={() => {
          window.location.href = 'https://discord.gg/M3UaQMbSer';
          return null;
        }}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
