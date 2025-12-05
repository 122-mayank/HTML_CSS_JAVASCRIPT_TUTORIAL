const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/homes.json');

// Helper to read homes
const getHomes = () => {
  const fileData = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(fileData);
};

// Helper to write homes
const saveHomes = (homes) => {
  fs.writeFileSync(dataPath, JSON.stringify(homes, null, 2));
};

exports.getbookHome = (req, res) => {
  res.render('book_room');
};

exports.getaddHome = (req, res) => {
  const users = getHomes();
  res.render('airbnb_home', { users });
};

exports.postHome = (req, res) => {
  const userData = req.body;
  console.log(userData);
  if (!userData) return res.status(400).send("No data received");

  let homes = getHomes();

  // Prevent duplicates based on a unique key (like name + contact)
  const isDuplicate = homes.some(home => home.name === userData.name && home.contact === userData.contact);
  if (!isDuplicate) {
    homes.push(userData);
    saveHomes(homes);
  }

  res.render('airbnb_home', { users: homes });
};

exports.homesDetails = (req, res, next) => {
  res.render('homes_details');
};
