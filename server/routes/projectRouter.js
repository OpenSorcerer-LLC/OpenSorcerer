const express = require("express");
const projectController = require("../controllers/projectController");

const router = express.Router();

// getting a user's added and bookmarked projects
router.get(
  "/projects/:user_id",
  projectController.getUserProjects,
  projectController.getContributingProjects,
  (req, res) => res.status(200).json(res.locals.projects)
);

// get details of a project (WIP)
router.get(
  "/project/:project_id",
  projectController.getProjectDetails,
  (req, res) => res.status(200).json()
);

// add a project
router.post(
  "/project",
  projectController.verifyProject,
  projectController.addProject,
  (req, res) => res.sendStatus(200)
);

// get list of all projects
router.get("/projects", projectController.getProjects, (req, res) =>
  res.status(200).json(res.locals.projects)
);

// bookmark a project to contribute to
router.post(
  "/projects/contribute",
  projectController.bookmarkProject,
  projectController.getContributingProjects,
  (req, res) => res.status(200).json(res.locals.projects)
);

// deleting a repo entirely
router.delete(
  "/project",
  // projectController.verifyProject,
  projectController.deleteProject,
  (req, res) => res.sendStatus(200)
);

// removing repo from user's bookmarks
router.delete(
  "/project/:projectid",
  projectController.deleteBookmark,
  (req, res) => res.sendStatus(200)
);

module.exports = router;
