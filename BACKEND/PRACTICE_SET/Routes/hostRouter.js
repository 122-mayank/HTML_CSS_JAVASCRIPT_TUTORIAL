const express = require('express');
const hostRouter = express.Router();
const path = require('path');

hostRouter.get('/contact-us',(req,res,next)=>{
       res.sendFile(path.join(__dirname,"../","views","contact.html"));
});

hostRouter.use(express.urlencoded());


hostRouter.post('/contact-us',(req,res,next)=>{
       console.log(req.body , req.url);
         res.sendFile(path.join(__dirname,"../","views","edit_contact.html"));

});


module.exports=hostRouter;