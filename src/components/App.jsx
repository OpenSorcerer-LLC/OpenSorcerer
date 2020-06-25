import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import Outro from "./Outro";
import ReposPage from "./ReposPage";
import RepoAddPage from "./RepoAddPage";
import MyReposPage from "./MyReposPage";
import ContributionsPage from "./ContributionsPage";
import "../styles/App.css";

function App(props) {
  console.log(props);
  return (
    <>
      <Router>
        <Menu />
        <Outro />
        <Switch>
          <Route path="/contributions">
            <ContributionsPage />
          </Route>
          <Route path="/myrepos/add">
            <RepoAddPage />
          </Route>
          <Route path="/myrepos">
            <MyReposPage />
          </Route>
          <Route path="/">
            <ReposPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
