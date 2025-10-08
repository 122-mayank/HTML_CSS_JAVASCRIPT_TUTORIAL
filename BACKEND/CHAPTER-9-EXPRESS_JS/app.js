//external module
const express = require('express');

//local module
const requestHandler = require('./user');

const app = express();

//Adding middleware
app.use('/',(req , res , next)=>{
      console.log("Came in first middleware",req.url, req.method);
      next();
});


app.use('/submit-details',(req , res , next)=>{
      console.log("Came in second middleware",req.url, req.method);
      res.send("<p>Welcome to Divine Attire</p>");
});

const PORT = 3002;
app.listen(PORT , ()=>{
           console.log(`Server is running on http://localhost:${PORT}`);
});