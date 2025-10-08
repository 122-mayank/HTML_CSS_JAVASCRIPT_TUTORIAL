const express = require('express');
const hostRouter = express.Router();

const registeredhomes = []; // Store registered homes

// Route for booking page
hostRouter.get('/book_rooms', (req, res) => {
  res.render('book_room');
});

// Route for submitting data
hostRouter.post('/', (req, res) => {
  const userData = req.body;

  if (!userData) return res.status(400).send("No data received");

  registeredhomes.push(userData);
  res.render('airbnb_home', { users: registeredhomes });
});

// Export both router and array
module.exports = { hostRouter, registeredhomes };
