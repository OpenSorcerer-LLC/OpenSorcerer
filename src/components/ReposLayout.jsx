import React from "react";
import Repo from "./Repo";
import "../styles/ReposLayout.css";
import { useLocation } from "react-router-dom";

function ReposLayout(props) {
  const location = useLocation();
  console.log("location", location);
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
