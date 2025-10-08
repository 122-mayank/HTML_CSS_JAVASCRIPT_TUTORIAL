const express = require('express');
// const bodyParser = require('body-parser');
const userRouter =  require('./Routes/UserRouter');
const hostRouter = require('./Routes/hostRouter');
const app = express();

app.use(userRouter);
app.use(hostRouter);

// app.get('/contact-us',(req,res,next)=>{
//         res.send(`<h1>Fill your details</h1>
//                  <form action ='/contact-us' method ='POST'>
//                   <input type = "text" name ="email" placeholder ="Enter the email"/>
//                   <br><br>
//                   <input type ="submit" />
//                   </form>
//             `);
// });

// app.use(bodyParser.urlencoded());
// app.use(express.urlencoded());

// app.post('/contact-us',(req,res,next)=>{
//        console.log(req.body , req.url);
//        res.send(`<h1>We will contact u shortly</h1>
//         <a href= "/" >Go to home </a> `);

// });


const PORT = 3002;
app.listen(PORT,()=>{
     console.log(`Server is running on http://localhost:${PORT}`);
})
