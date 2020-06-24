const fetch = require('node-fetch');

const userController = {};

userController.addUser = (req, res, next) => {
  const { userId, githubHandle, email } = res.locals
  const query = `INSERT INTO people (Id, Github_Handle, Email) VALUES ($1, $2, $3);`
  const values = [userId, githubHandle, email]
  db.query(query, values)
    .then(data => next())
    .catch(err => next({
      log: 'Error adding repo',
      message: { err: 'projectController.addProject: error adding repo' }
    }))
}

module.exports = projectController;