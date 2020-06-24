const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.get('/projects/:user_id',
  projectController.getUserProjects,
  (req, res) => res.status(200).json(res.locals.projects));

router.get('/project/:project_id',
  projectController.getProjectDetails,
  (req, res) => res.status(200).json());

router.post('/project',
  projectController.verifyProject,
  projectController.addProject,
  (req, res) => res.status(200).json({ success: 'Successfully added project' }));

router.put('/project')

router.delete('/project')


module.exports = router;
