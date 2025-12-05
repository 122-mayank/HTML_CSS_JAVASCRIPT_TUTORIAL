const express = require('express');
const userRouter = express.Router();

// const { registeredhomes } = require('../controllers/homes');
const homeControllers = require('../controllers/homes');

// Home page showing registered homes
userRouter.get('/',homeControllers.getaddHome);
userRouter.post('/homes_details',homeControllers.homesDetails);

module.exports = userRouter;
