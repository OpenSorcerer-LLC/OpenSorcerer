import React from "react";
import Menu from "./Menu";
import Outro from "./Outro";
import Repo from "./Repo";
import "../styles/App.css";

function App() {
  return (
    <>
      <div>
        <Menu login={false} />
        <Outro />
      </div>
      <Repo input={!false} />
    </>
  );
}

export default App;
