import React from "react";
import Repo from "./Repo";
import "../styles/ReposLayout.css";

function ReposLayout(props) {
  return (
    <div className="repos_container">
      <div className="repos_grid">
        <Repo input={!true} />
        <Repo input={!true} />
        <Repo input={!true} />
        <Repo input={!true} />
      </div>
    </div>
  );
}

export default ReposLayout;
