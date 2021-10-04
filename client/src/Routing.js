import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages, components, styles
import Home from "./pages/Home";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routing;
