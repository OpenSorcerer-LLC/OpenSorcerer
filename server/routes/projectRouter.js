const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/projects/:user_id',
  projectController.getUserProjects,
  projectController.getContributingProjects,
  (req, res) => res.status(200).json(res.locals.projects));

router.get('/project/:project_id',
  projectController.getProjectDetails,
  (req, res) => res.status(200).json());

router.post('/project',
  projectController.verifyProject,
  projectController.addProject,
  projectController.getUserProjects,
  (req, res) => res.status(200).json(res.locals.projects));

router.get('/projects',
  projectController.getProjects,
  (req, res) => res.status(200).json(res.locals.projects));

router.post('/projects/contribute',
  projectController.bookmarkProject,
  projectConroller.getContributingProjects,
  (req, res) => res.status(200).json(resl.locale.projects)
);

router.put('/project')

router.delete('/project')


module.exports = router;
