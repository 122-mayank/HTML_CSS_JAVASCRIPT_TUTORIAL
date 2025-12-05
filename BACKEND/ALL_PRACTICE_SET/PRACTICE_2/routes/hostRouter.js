const express = require('express');
const hostRouter = express.Router();

const homeControllers = require('../controllers/homes');

// const registeredhomes = []; // Store registered homes

// Route for booking page
hostRouter.get('/book_rooms',homeControllers.getbookHome);

// Route for submitting data
hostRouter.post('/',homeControllers.postHome);

// Export both router and array
module.exports = hostRouter;
