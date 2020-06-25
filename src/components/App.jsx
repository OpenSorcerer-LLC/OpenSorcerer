import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import Outro from "./Outro";
import ReposLayout from "./ReposLayout";
import "../styles/App.css";

function App(props) {
  console.log(props);
  return (
    <>
      <Router>
        <Menu />
        <Outro />
        <Switch>
          <Route path="/">
            <ReposLayout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
