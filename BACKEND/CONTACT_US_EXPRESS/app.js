const express = require('express');

const app = express();

app.use((req,res,next)=>{
     console.log("Fisrt dummy middleware",req.url,req.method);
     next();
});

app.use((req,res,next)=>{
    console.log('Second dummy middleware',req.url,req.method);
    next();
});

// app.use((req,res,next)=>{
//     console.log("Third MiddleWare");
//     res.send('<h1>Welcome to the Third MiddleWare</h1>',req.url,req.method);
// });


app.get('/',(req,res,next)=>{
    console.log("Handling the get / middleware", req.url , req.method);
    res.send(`<h1>Welcoem to complete coding</h1>`);
});

app.get('/contact-us',(req,res,next)=>{

     res.send(`<h1>Please give your details</h1>
        <form action="/contact-us" method="POST">
        <input type ="text" name = "name" placeholder ="Enter your name" ></input>
        <input type ="email" name = "email" placeholder ="Enter your email" ></input>
        <input type ="Submit"/>
        </form>`);
});

app.post('/contact-us',(req,res,next)=>{

    res.send('<h1>Thank you for submitting details</h1>')

});


 
const PORT = 3001;
app.listen(PORT, ()=>{

    console.log(`Server is running on http://localhost:${PORT}`);

});