import React from "react";
import AppBar from "./components/AppBar/AppBar";
import "./App.css";
import Main from "./components/routes/main";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/landing/landing";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import About from "./components/About/About";
function App() {
  return (
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <AppBar />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
