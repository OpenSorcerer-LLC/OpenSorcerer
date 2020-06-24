import React, { Component } from "react";
import Menu from "./Menu";
import "../styles/App.css";

function App() {
  return (
    <>
      <Menu login={false} />
      <h1 class="app_name">Open Sorcerer</h1>
      <img src="fairy.png" />
    </>
  );
}

export default App;
