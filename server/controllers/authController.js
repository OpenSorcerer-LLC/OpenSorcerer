const fetch = require('node-fetch');

const authController = {};
authController.getAccessToken = (req, res, next) => {
  const code = req.query.code;
  fetch(
    `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${code}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      res.locals.token = data;
      return next();
    });
};

authController.getUserInfo = (req, res, next) => {
  res.cookie('token', res.locals.token);
  fetch('https://api.github.com/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'token ' + res.locals.token.access_token,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.locals.userInfo = data;
      return next();
    })
    .catch((err) => {
      return next('error occured in getUserInfo fetch request');
    });
};

module.exports = authController;
