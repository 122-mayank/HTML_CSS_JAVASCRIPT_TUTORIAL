const path = require('path');

const express = require('express');
const userRouter = express.Router();
const homescontroller = require('../controllers/homes')




userRouter.get('/',homescontroller.gethomesecond);

module.exports=userRouter;