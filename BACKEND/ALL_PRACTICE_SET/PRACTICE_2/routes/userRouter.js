const express = require('express');
const userRouter = express.Router();

const { registeredhomes } = require('./hostRouter');

// Home page showing registered homes
userRouter.get('/', (req, res) => {
  res.render('airbnb_home', { users: registeredhomes });
});

module.exports = userRouter;
