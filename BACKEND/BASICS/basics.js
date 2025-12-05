
            // It is the first method 

// const {add , mult}= require("./index");
// console.log(add(5,2));
// console.log(mult(2,9));

/* for the first method the code of index.js is ->>
            
               
const add = (a,b)=>{
      return a+ b;
}
const mult = (a,b)=>{
      return a*b;
}
module.exports={add,mult};

*/


                //  It is the second method 

// const index = require('./index');
// console.log(index.add(7,6));
// console.log(index.mult(2,3));

/* for the second method the code of index.js is ->>
            
               
const add = (a,b)=>{
      return a+ b;
}
const mult = (a,b)=>{
      return a*b;
}
module.exports={add,mult};

*/


                  //It is third Method
/* 
           const{add,mult} = require('./index');
           console.log(add(5,10));
           console.log(mult(5,10));

           //code for the index.js

           module.exports.add = add;
           module.exports.mult = mult;

*/