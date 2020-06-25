import React, { useState } from "react";
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
    if (description.length < 140)
      setDescription(description + e.nativeEvent.data);
  }

  let button;

  switch (props.buttonType) {
    case "CONTRIBUTE":
      button = <span className="repo_button">CONTRIBUTE</span>;
      break;
  }

  return (
    <div className="repo">
      <h2 className="repo_title">{props.name}</h2>
      <img src="seventagram.png" />
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
