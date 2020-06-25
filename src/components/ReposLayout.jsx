import React from "react";
import "../styles/ReposLayout.css";
import { Link } from "react-router-dom";

function ReposLayout(props) {
  return (
    <div className="repos_container">
      {props.addRepo ? (
        <Link className="button_add_repo" to="/myrepos/add">
          ADD REPO
        </Link>
      ) : (
        ""
      )}
      <div className="repos_grid">{props.repos}</div>
    </div>
  );
}

export default ReposLayout;
