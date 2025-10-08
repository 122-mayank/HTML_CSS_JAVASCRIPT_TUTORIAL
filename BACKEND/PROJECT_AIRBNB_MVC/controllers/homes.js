const Home = require("../models/home");

exports.gethome =(req,res,next)=>{
       console.log(req.url , req.method);
       res.render('address');
};



exports.addhome=(req,res,next)=>{
    // console.log(req.url , req.method , req.body);
const home = new Home(req.body.name , req.body.address, req.body.city,req.body.contact);
    // const userData = req.body;
    // registeredHomes.push(userData); // store the data
      home.save();
    // console.log(registeredHomes);

    // After submission, render home page with submitted data
     const registeredHomes = Home.fetchAll();
    res.render('home', { users: registeredHomes });
};

exports.gethomesecond=(req,res,next)=>{
    //  console.log(req.url , req.method);
      const registeredHomes = Home.fetchAll();
           res.render('home',{users:registeredHomes});
}