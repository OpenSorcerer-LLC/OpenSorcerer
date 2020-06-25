const fetch = require('node-fetch');
const db = require('../database');

const projectController = {};

projectController.getProjects = (req, res, next) => {
  // console.log('cookie', req.cookies.user.id, req.cookies.user.login)
  let query = `SELECT * FROM projects;`;
  db.query(query)
    .then(data => {
      res.locals.projects = data.rows;
      console.log(res.locals.projects)
      return next();
    })
    .catch(err => {
      console.log(err);
      return next({
        log: 'Error retrieving projects',
        message: { err: 'projectController.getProjects: Error retrieving projects' }
      });
    })
}

projectController.getUserProjects = (req, res, next) => {
  let query = `SELECT * FROM projects WHERE Maintainer_id = $1;`;
  let params = [req.params.user_id];
  db.query(query, params)
    .then(data => {
      res.locals.projects = { owner: data.rows };
      return next();
    })
    .catch(err => {
      console.log(err);
      return next({
        log: 'Error retrieving user\'s projects',
        message: { err: 'projectController.getUserProjects: Error retrieving projects' }
      });
    })
}

projectController.getContributingProjects = (req, res, next) => {
  let query = `SELECT contributing.*, people.Github_handle, projects.Maintainer_id, projects.repo_name, projects.Description, projects.Created_At
    FROM contributing
    LEFT JOIN people ON (people.Id = contributing.Contributor_id)
    LEFT JOIN projects ON (projects.Id = contributing.project_id)
    WHERE (Contributor_id = $1);`;
  let params = [req.params.user_id];
  db.query(query, params)
    .then(data => {
      res.locals.projects.contributor = data.rows;
      console.log(res.locals.projects)
      return next();
    })
    .catch(err => {
      console.log(err);
      return next({
        log: 'Error fetching contributing projects',
        message: { err: 'projectController.getContributingProjects: ERROR' }
      })
    })
}

projectController.bookmarkProject = (req, res, next) => {
  let query =  `INSERT INTO contributing (Contributor_id, Project_id) VALUES ($1, $2);`;
  let params = Object.values(req.body);
  db.query(query, params)
    .then(data => next())
    .catch(err => {
      console.log(err);
      return next({
        log: 'Error bookmarking project',
        message: { err: 'projectController.bookmarkProject: ERROR' }
      })
    })
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
        message: { err: 'projectController.getProjectDetails: ERROR' }
      })
    })
}

projectController.verifyProject = (req, res, next) => {
  if (req.body.url && req.body.description) { // condition met when adding project
    const urlParams = req.body.url.split('/');
    res.locals.org = urlParams[urlParams.length - 2];
    res.locals.repo = urlParams[urlParams.length - 1];
    res.locals.description = req.body.description;
  } else { // condition met when deleting project
    res.locals.org = req.body.org;
    res.locals.repo = req.body.repo;
  }
  res.locals.username = req.cookies.user.login;
  res.locals.userid = req.cookies.user.id;

  if (res.locals.username !== res.locals.org) {
    fetch(`https://api.github.com/orgs/${res.locals.org}/members/${res.locals.username}`)
      .then(data => {
        console.log(data.status)
        if (data.status === 404) return res.send({ error: "You are not a member of this repo, get lost" });
        else return next();
      })
      .catch(err => {
        console.log(err)
        return next({
          log: 'Error verifying repo',
          message: { err: 'projectController.verifyProject: error verifying repo' }
        })
      })
  }
}

projectController.addProject = (req, res, next) => {
  console.log(`https://api.github.com/repos/${res.locals.org}/${res.locals.repo}`)
  fetch(`https://api.github.com/repos/${res.locals.org}/${res.locals.repo}`)
    .then(data => data.json())
    .then(data => {
      res.locals.id = data.id;
      const params = [res.locals.id, res.locals.userid, res.locals.repo, res.locals.description];
      const query = `INSERT INTO projects (Id, Maintainer_id, Repo_name, Description) VALUES ($1, $2, $3, $4);`;
      db.query(query, params)
        .then(data => next())
        .catch(err => {
          console.log(err)
          return next({
            log: 'Error adding repo',
            message: { err: 'projectController.addProject: error adding repo' }
          })
        })
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

  projectController.deleteProject = (req, res, next) => {
    let query = `DELETE FROM projects WHERE Id = $1 AND Maintainer_id = $2;`;
    let params = [req.body.id, req.cookies.user.id];
    db.query(query, params)
      .then(data => next())
      .catch(err => {
        console.log(err);
        return next({
          log: 'Error deleting repo',
          message: { err: 'projectController.deleteProject: error deleting repo' }
        });
      })
  }

  projectController.deleteBookmark = (req, res, next) => {
    let query = `DELETE FROM Contributing WHERE (Contributor_Id = $1 AND Project_Id = $2);`;
    let params = [req.cookies.user.id, req.params.projectid];
    db.query(query, params)
    .then(data => next())
    .catch(err => {
      console.log(err);
      return next({
        log: 'Error deleting contribution',
        message: { err: 'projectController.deleteBookmark: error deleting' }
      });
    })
  }

module.exports = projectController;