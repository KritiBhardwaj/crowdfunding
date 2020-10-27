import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import EditProjecPage from "./pages/EditProjectPage";

function App() {
  return (
    <Router>
      <div id="web-title">
        <h1>%% Culturegram %%</h1>
      </div>

      <div id="nav">
        <Nav />
      </div>

      <div id="home-page">
        <Switch>
          <Route path="/deleteProjects/:id">
            <EditProjecPage />
          </Route>
          <Route path="/editProjects/:id">
            <EditProjecPage />
          </Route>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/createProject">
            <CreateProjectPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
