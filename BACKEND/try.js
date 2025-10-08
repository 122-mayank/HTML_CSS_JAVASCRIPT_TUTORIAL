const http = require('http');

const server = http.createServer((req,res)=>{
       console.log(req.method , req.url);

       if(req.url == '/'){
           res.setHeader('Content-Type','text/html');
           res.write(`
             <html>
             <head>
             <title>Try Document</title>
              <body>
               <h1>Welcome to the CalCulator</h1>
               <form action ='/calculator' method ='POST'>
               <button type = "submit" > Calculator </button>
               </form>
              </body>
             </head>
             </html>
            `);
            return res.end();

       }

       else if(req.url === "/submit-details" && req.method=="POST"){

              const body=[];
              req.on('data',chunk=>{
                 console.log(chunk);
                 body.push(chunk);
              });

              req.on('end',()=>{
                 const parseBody = Buffer.concat(body).toString();
                 console.log(parseBody);


                 const bodyObj = {};
                 const params = new URLSearchParams(parseBody);
                 for(const[key , value] of params.entries()){
                       bodyObj[key] = value;
                 }

                 console.log(bodyObj);
                 let sum = 0;
                 for(let key in bodyObj){
                     sum = sum + Number(bodyObj[key]);
                 }
              res.setHeader('Content-Type','text/html');
              res.write(`
                <html>
                <head>
                <title>Try Document></title>
                 <h1>Sum is : ${sum}</h1>
                </head>
                </html>
            `);
              });
                res.statusCode=302;
             res.setHeader('Location','/');
       }

       else if(req.url === "/calculator" && req.method ==='POST'){
          res.setHeader('Content-Type','text/html');
          res.write(`
                <html>
                <head>
                <title>Try Document></title>
                <form action ="/submit-details" method ="POST">
                <input type ="text" name = 'num1' placeholder ="Enter the first Number"></input><br><br>
                <input type ="text" name ='num2' placeholder ="Enter the second Number"></input><br><br>
                <button type='submit'> Sum </button>
                </form>
                </head>
                </html>
            `);
            return res.end();
       }




});



const PORT = 3001;
server.listen(PORT , ()=>{
     console.log(`Server is running on http://localhost:${PORT}`);
});