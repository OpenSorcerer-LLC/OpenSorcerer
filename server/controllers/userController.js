const fetch = require('node-fetch');
const db = require('../database');

const userController = {};

userController.addUser = (req, res, next) => {
  const { id, login, email } = res.locals.userInfo
  const query = `INSERT INTO people (Id, Github_Handle, Email) 
                 VALUES ($1, $2, $3) 
                 ON CONFLICT DO NOTHING`
  const values = [id, login, email]
  db.query(query, values)
    .then(data => next())
    .catch(err => next({
      log: 'DB User error',
      message: { err: 'userController.addUser: error adding user to DB', err }
    }))
}

userController.setUserIdCookie = (req, res, next) => {
  const { id } = res.locals.userInfo;
  res.cookie('userId', id)
  next()
}

module.exports = userController;