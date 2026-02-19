const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views','../views');

app.use(express.static(path.join(__dirname,'../public')));

app.get('/',(req,res)=>{
    res.render('index');
});

const PORT = 4000;
app.listen(PORT,()=>{
     console.log(`Server is runnning on http://localhost:${PORT}`);
});