const express = require('express');
const userRouter = express.Router();
const path = require('path');



userRouter.get('/',(req,res,next)=>{
        // res.send(`<h1>Welcome to airbnb</h1>
        //     <a href='/contact-us' >Go to AirBnb </a>`);
        res.sendFile(path.join(__dirname,"../","views","home.html"));
});


module.exports=userRouter;


