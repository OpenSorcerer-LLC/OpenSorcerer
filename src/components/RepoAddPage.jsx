import React, { useState, useEffect } from "react";
import Repo from "./Repo";

function RepoAddPage() {
  const [repoLink, setRepoLink] = useState("");
  function handleInput(e) {
    setRepoLink(e.target.value);
  }

  return (
    <div className="repos_container">
      <h2 className="repo_link">Repo Link</h2>
      <input
        className="repo_link_input"
        type="text"
        placeholder="Copy and paste the link here."
        onChange={handleInput}
      />
      <Repo input={true} buttonType="ADD REPO" repoLink={repoLink} />
    </div>
  );
}

export default RepoAddPage;
