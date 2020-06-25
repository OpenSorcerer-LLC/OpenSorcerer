import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import Outro from "./Outro";
import ReposPage from "./ReposPage";
import "../styles/App.css";

function App(props) {
  console.log(props);
  return (
    <>
      <Router>
        <Menu />
        <Outro />
        <Switch>
          <Route path="/contributions"></Route>
          <Roate path="/myrepos/add">
            <RepoAddPage />
          </Roate>
          <Route path="/myrepos"></Route>
          <Route path="/">
            <ReposPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
