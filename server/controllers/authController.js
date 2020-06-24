const fetch = require('node-fetch');

const authController = {};
authController.getAccessToken = (req, res, next) => {
  const code = req.query.code;
  fetch(
    `https://github.com/login/oauth/access_token?client_id=4c7c5ce32daad19cb2f37&client_secret=17019ae36a7166c80eeb4a5ea4a016bd77910d6f&code=${code}`,
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
<<<<<<< HEAD
      console.log(data)
=======
      console.log(data);
>>>>>>> e184bca5c4c22224a1f0611e8e7f83dc2c09bcb0
      res.locals.userInfo = data;
      return next();
    })
    .catch((err) => {
      return next('error occured in getUserInfo fetch request');
    });
};

module.exports = authController;
