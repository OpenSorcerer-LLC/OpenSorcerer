import React from "react";
import Menu from "./Menu";
import Outro from "./Outro";
import ReposLayout from "./ReposLayout";
import "../styles/App.css";

function App() {
  return (
    <>
      <Menu login={true} />
      <Outro />
      <ReposLayout />
    </>
  );
}

export default App;
