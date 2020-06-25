import React, { useState, useEffect } from "react";
import ReposLayout from "./ReposLayout";
import Repo from "./Repo";

function MyReposPage() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/projects/1")
      .then((response) => response.json())
      .then((data) => {
        const { contributer } = data;
        setRepos(
          contributer.map((value) => (
            <Repo
              id={value.id}
              name={value.repo_name}
              description={value.description}
              buttonType="UNCONTRIBUTE"
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

export default MyReposPage;
