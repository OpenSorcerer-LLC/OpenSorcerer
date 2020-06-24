const fetch = require('node-fetch');
cosnt db = require('../database');

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

projectController.verifyProject = (req, res, next) => {
  const urlParams = req.body.url.split('/');
  res.locals.username = req.body.username;
  res.locals.org = urlParams[urlParams.length - 2];
  res.locals.repo = urlParams[urlParams.length - 1];
  res.locals.description = req.body.description;

  if (username !== org) {
    fetch(`https://api.github.com/orgs/${res.locals.org}/members/`)
      .then(res => {
        if (res.status === 404) return res.send({ error: "You are not a member of this repo, get lost" });
        else return next();
      })
      .catch(err => {
        return next({
          log: 'Error verifying repo',
          message: { err: 'projectController.verifyProject: error verifying repo'}
        })
      })
      
    }
      
  }

  projectController.addProject = (req, res, next) => {
    fetch(`https://api.github.com/${res.locals.org}/${res.locals.repo}`)
      .then(res => res.json())
      .then(data => {
        res.locals.id = data.id;
        res.locals.maintainer = data.owner.id;
        const params = [res.local.id, res.locals.maintainer, res.locals.repo, res.locals.description];
        const query = `INSERT INTO projects (Id, Maintainer_id, Repo_name, Description) VALUES ($1, $2, $3, $4);`;
        db.query(query, params)
          .then(data => next())
          .catch(err => next({
            log: 'Error adding repo',
            message: { err: 'projectController.addProject: error adding repo' }
          }))
        })
        .catch(err => next({
          log: 'Error fetching repo',
          message: { err: 'projectController.addProject: error fetching repo' }
        }))
  }


module.exports = projectController;