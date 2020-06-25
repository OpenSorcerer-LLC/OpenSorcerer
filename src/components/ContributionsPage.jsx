import React, { useState, useEffect } from "react";
import ReposLayout from "./ReposLayout";
import Repo from "./Repo";

function MyReposPage() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/projects/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRepos(
          data.map((value) => (
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
      <ReposLayout repos={repos} addRepo={true} />
    </>
  );
}

export default MyReposPage;
