import React from "react";
import Repo from "./Repo";
import "../styles/ReposLayout.css";

function ReposLayout(props) {
  return (
    <div className="repos_container">
      <div className="repos_grid">{props.repos}</div>
    </div>
  );
}

export default ReposLayout;
