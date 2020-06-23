const fetch = require('node-fetch');

const projectController = {};

projectController.getProjects = (req, res, next) => {
  return next();
}

projectController.getProjectDetails = (req, res, next) => {
  fetch(`https://api.github.com/repos/${req.body.username}/${req.body.repo}`)
    .then(res => res.json())
    .then(data => {
      res.locals.project = data;
      return next();
    })
    .catch(err => {
      return next({
        log: 'Error fetching project details',
        message: {err: 'projectController.getProjectDetails: ERROR'}
      })
    })
}

projectController.addProject = (req, res, next) => {
  const url = req.body.url;
  const description = req.body.description;
  const query = `INSERT INTO projects (Id, Maintainer_id, Repo_name, Description);`;

  return next();
}

module.exports = projectController;