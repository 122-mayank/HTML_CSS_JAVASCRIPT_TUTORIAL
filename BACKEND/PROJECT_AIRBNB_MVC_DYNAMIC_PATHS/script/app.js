const express = require('express');
const path = require('path');
const userRouter = require('../routes/userRouter');
const hostrouter = require('../routes/hostrouter');


const app = express();
console.log(__dirname);

app.set('view engine','ejs');
app.set('views',path.join(__dirname , '../views'));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'../public')));

// let registeredHomes=[];

// app.get('/',(req,res,next)=>{
//      console.log(req.url , req.method);
//            res.render('home',{users:registeredHomes});
// });

app.use(userRouter);
app.use(hostrouter);

// app.get('/add_home',(req,res,next)=>{
//        console.log(req.url , req.method);
//        res.render('address');
// });



// app.post('/',(req,res,next)=>{
//     // console.log(req.url , req.method , req.body);
//     const userData = req.body;
//     registeredHomes.push(userData); // store the data
//     console.log(registeredHomes);

//     // After submission, render home page with submitted data
//     res.render('home', { users: registeredHomes });
// });


const PORT = 3000;
app.listen(PORT , ()=>{
      console.log(`Server is running on the http://localhost:${PORT}`);
});

