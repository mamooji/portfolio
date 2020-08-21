import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../landing/landing";
import Projects from "../projects/projects";
import Resume from "../resume/resume";
import About from "../About/About";
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
      <Route path={process.env.PUBLIC_URL + "/projects"} component={Projects} />
      <Route path={process.env.PUBLIC_URL + "/resume"} component={Resume} />
    </Switch>
  );
};

export default Main;
