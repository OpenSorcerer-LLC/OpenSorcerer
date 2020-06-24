import React from "react";
import Repo from "./Repo";
import "../styles/Repos.css";

function Repos(props) {
  return (
    <div className="repos">
      <Repo input={!true} />
    </div>
  );
}

export default Repos;
