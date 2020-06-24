import React from "react";
import Menu from "./Menu";
import Outro from "./Outro";
import Repos from "./Repos";
import "../styles/App.css";

function App() {
  return (
    <>
      <Menu login={false} />
      <Outro />
      <Repos />
    </>
  );
}

export default App;
