import React, { useState } from "react";
import "../styles/Repo.css";

/* 
      <textarea
        className="repo_textbox"
        placeholder={textPlaceHolder}
        value={description}
        onChange={handleTextAreaInput}
      ></textarea>
      <label className="repo_description">{textPlaceHolder}</label>
*/
/* repoTitle: string, description: string, buttonTitle: string, buttonCallback: function, input: boolean */
function Repo(props) {
  const textPlaceHolder = "Please include the description in here.";
  const [description, setDescription] = useState("");

  function handleTextAreaInput(e) {
    if (description.length < 140)
      setDescription(description + e.nativeEvent.data);
  }

  return (
    <div className="repo">
      <h2 className="repo_title">React-Native</h2>
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
          <label className="repo_description">{textPlaceHolder}</label>
          <div className="repo_issues_container">
            <label className="repo_issues_count">80000</label>
            <label className="repo_issues">Issues</label>
          </div>
        </>
      )}
      <span className="repo_button">blah</span>
    </div>
  );
}

export default Repo;
