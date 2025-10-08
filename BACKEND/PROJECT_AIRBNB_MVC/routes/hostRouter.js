const path = require('path');

const express = require('express');
const hostrouter = express.Router();
const homescontroller = require('../controllers/homes')



hostrouter.get('/add_home',homescontroller.gethome);
hostrouter.post('/',homescontroller.addhome);

module.exports=hostrouter;