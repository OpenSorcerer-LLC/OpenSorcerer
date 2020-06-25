import React, { useState, useEffect } from "react";
import ReposLayout from "./ReposLayout";
import Repo from "./Repo";

function ReposPage() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setRepos(
          data.map((value) => (
            <Repo
              id={value.id}
              name={value.repo_name}
              description={value.description}
              buttonType="CONTRIBUTE"
            />
          ))
        );
      });
  }, []);

  return (
    <>
      <ReposLayout repos={repos} />
    </>
  );
}

export default ReposPage;
