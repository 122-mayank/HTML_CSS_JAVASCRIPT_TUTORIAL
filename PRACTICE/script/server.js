const express = require('express');
const app = express();

const path = require('path');

app.set('view engine','ejs');
app.set('views' , '../views');

app.get("/",(req,res)=>{
      res.render('index');
});

const PORT = 5000;
app.listen(PORT , ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
});

