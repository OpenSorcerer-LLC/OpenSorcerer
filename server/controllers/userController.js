const fetch = require('node-fetch');

const userController = {};

// userController. = (req, res, next) => {
//   return next();
// }


projectController.addProject = (req, res, next) => {
  const url = req.body.url;
  const description = req.body.description;
  const query = `INSERT INTO projects (Id, Maintainer_id, Repo_name, Description);`

  return next();
}

module.exports = projectController;