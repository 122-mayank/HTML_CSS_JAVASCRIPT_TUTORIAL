const fs = require('fs');
// const http = require('http');

const requestHandler = ((req,res)=>{
    console.log(req.method , req.url);

    

    if(req.url === '/'){
          res.setHeader("Content-Type", "text/html");
          res.write('<html>');
          res.write('<head><title>Calculator</title></head>');
          res.write('<body><h1>Welcome to the MATHS</h1></body>');
          res.write('</html>');
          return res.end();
    }

    else if(req.url === '/calculator'){
        res.setHeader("Content-Type", "text/html");
          res.write('<html>');
          res.write('<head><title>Calculator</title></head>');
          res.write('<body>');
          res.write('<form action = "/submit-details" method="POST">');
          res.write('<input type ="number"  placeholder ="Enter the first number" name ="num1" class="num1"><br><br>');
          res.write('<input type ="number" placeholder ="Enter the second number" name ="num2" class="num2"><br><br>');
          res.write('<button id ="btn" type ="submit">Sum</button>');
          res.write('</form>');
          res.write('</body>');
          res.write('</html>');
          return res.end();
    }
   else if(req.url.toLowerCase() === '/submit-details'
    && req.method == 'POST'){
          
         const body=[]; 
         const bodyobj ={};
         req.on('data',chunk=>{
              console.log(chunk);
              body.push(chunk);
         });

         req.on('end',()=>{
             const parsebody = Buffer.concat(body).toString();
             console.log(parsebody);
             const params = new URLSearchParams(parsebody);
             
             for(const[key , val] of params.entries()){
                bodyobj[key] = val;
             }
             console.log(bodyobj);
             fs.writeFileSync('user.txt',JSON.stringify(bodyobj));

              let sum = 0;
          for(let key in bodyobj){
               sum = sum +Number( bodyobj[key]);
          }

          res.setHeader("Content-Type", "text/html");
          res.write('<html>');
          res.write('<head><title>Calculator</title></head>');
          res.write(`<body><h1>Sum: ${sum}</h1></body>`);
          res.write('</html>');
          res.end();
         });

         


         
    }
    
    

});
module.exports = requestHandler;

