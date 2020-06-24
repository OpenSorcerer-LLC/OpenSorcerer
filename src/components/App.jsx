import React from "react";
import Menu from "./Menu";
import Outro from "./Outro";
import "../styles/Reset.css";
import "../styles/App.css";

function App() {
  return (
    <>
      <Menu login={false} />
      <Outro />
    </>
  );
}

export default App;
