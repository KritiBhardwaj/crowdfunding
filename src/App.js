import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import EditProjecPage from "./pages/EditProjectPage";
import NotFoundPage from "./components/errorHanding/NotFoundPage";
import SubmitPledgePage from "./pages/SubmitPledgePage";

function App() {
  return (
    <Router>
      <div id="web-title">
        <h1> Culturegram </h1>
      </div>

      <div id="nav">
        <Nav />
      </div>

      <div id="about">
        <h1>
          This webpage is for people who are interested in getting an insight
          into intricacies of wedding ceremonies from different countries of the
          world. The current world circumstances go to show how quickly we can
          be distanced from the world and by establishing a cultural exchange
          platform we aim to uplift spirits of many people would have missed out
          on attending weddings of loved ones, travel plans around the world and
          more. You can create a project for a country that is yet to be
          represented. Alternatively, you can contibute to an existing project!!
          Share love !!
        </h1>
      </div>

      <div id="home-page">
        <Switch>
          <Route path="/projects/:id/submitPledge">
            <SubmitPledgePage />
          </Route>
          <Route path="/deleteProject/:id">
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
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="noauth" component={NotFoundPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
