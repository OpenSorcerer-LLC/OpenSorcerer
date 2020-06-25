import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Repo.css";

/* 
    id: integer,
    repoTitle: string, 
    description: string, 
    buttonTitle: string, 
    buttonCallback: function, 
    input: boolean 
    contributed: boolean
*/
function Repo(props) {
  const textPlaceHolder = "Please include the description in here.";
  const [description, setDescription] = useState("");

  function handleTextAreaInput(e) {
    if (e.target.value.length < 140) {
      setDescription(e.target.value);
    }
  }

  function handleAddRepoLink(e) {
    if (props.repoLink === "" || description === "") {
      e.preventDefault();
      return;
    }
    fetch("http://localhost:8080/api/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: props.repoLink,
        description,
      }),
    });
  }

  function handleContribute(e) {
    if (props.repoLink === "" || description === "") {
      e.preventDefault();
      return;
    }
    fetch(`api/project/${props.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  let button;

  switch (props.buttonType) {
    case "CONTRIBUTE":
      button = (
        <span onClick={handleContribute} className="repo_button">
          CONTRIBUTE
        </span>
      );
      break;
    case "ADD REPO":
      button = (
        <Link onClick={handleAddRepoLink} to="/myrepos" className="repo_button">
          ADD REPO
        </Link>
      );
      break;
    case "DELETE":
      button = <span className="repo_button">DELETE</span>;
      break;
    case "UNCONTRIBUTE":
      button = (
        <span className="repo_button repo_button--uncontribute">
          UNCONTRIBUTE
        </span>
      );
      break;
  }

  return (
    <div className="repo">
      <h2 className="repo_title">{props.name || " "}</h2>
      <img src="http://localhost:8080/seventagram.png" />
      {props.input ? (
        <textarea
          className="repo_textbox"
          placeholder={textPlaceHolder}
          value={description}
          onChange={handleTextAreaInput}
        ></textarea>
      ) : (
        <>
          <label className="repo_description">{props.description}</label>
          <div className="repo_issues_container">
            <label className="repo_issues_count">80000</label>
            <label className="repo_issues">Issues</label>
          </div>
        </>
      )}
      {button}
    </div>
  );
}

export default Repo;
