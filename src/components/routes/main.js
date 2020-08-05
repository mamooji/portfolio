import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../landing/landing";
import Projects from "../projects/projects";
import Resume from "../resume/resume";
import About from "../About/About";
const Main = () => {
  return (
    <Switch>
      <Route exact path="/portfolio" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
};

export default Main;
